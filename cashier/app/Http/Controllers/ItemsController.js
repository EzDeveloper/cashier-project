'use strict'

const Item = use('App/Model/Item')
const Validator = use('Validator')

class ItemsController {
	* index (request, response) {
		const items = yield Item.all()
		yield response.sendView('items', {items: items.toJSON() })
		//untuk kirim json tinggal yg atas di comment// bawah dibuka
		//response.json(items)
	}

	* create (request, response) {
		yield response.sendView('createItem')
	}

	* store (request, response) {
		const itemData = request.only('item_name','item_number','item_price')
		
		//msih gagal masukin custom date? yg masuk otomastis 
		//item.created_at = new Date().getDate()
		
		//cara validate, jgn lupa import Validatorny kalo untuk pertama kali
		//rule bisa disetel di modelny	
		const validation = yield Validator.validate(itemData, Item.rules)

		
		/* Custom Message
		const messages = {
  			required: 'This field is required to complete the registration process.'
		}

		indicative
		.validate(data, rules, messages)
		*/

		//kalo validation gagal, maka error message di kirim ke view 
		//messageny belum custom kalo mau custom lihat comment atas
		if (validation.fails()) {
			
			yield request
				.withOnly('item_name','item_number','item_price')
				.andWith({ errors: validation.messages() })
				.flash()

			//redirect ke create page
			response.redirect('items/create')
			return
		}
		
 		
		var registerMessage = {
    		succes: 'Item Created Succesfully'
    	}

    	//Cara Create Item
    	yield Item.create(itemData)

    	yield response.sendView('createItem', { registerMessage:registerMessage.succes})
    	return 
	}
}

module.exports = ItemsController
