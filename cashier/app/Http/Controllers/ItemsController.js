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
		const item = new Item()
		item.item_name = request.input('item_name')
		item.item_number = request.input('item_number')
		item.item_price = request.input('item_price')
		/* 
		Masih gagal masukin custom date? yg masuk otomastis 
		item.created_at = new Date().getDate()
		*?
		/*
		validation gagal
		const itemData = request.all()
		const validation = yield Validator.validate({itemData}, Item.rules)

		if (validation.fails()) {
			response.send(validation.messages())
			return 
		}
		*/
		yield item.save();

		var registerMessage = {
    		succes: 'Item Created Succesfully'
    	}

    	yield response.sendView('createItem', { registerMessage:registerMessage.succes})
    	return 
	}
}

module.exports = ItemsController
