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

	* store (request, response) {
		const itemData = request.all()
		const validation = yield Validator.validate({itemData}, Item.rules)

		if (validation.fails()) {
			response.send(validation.message())
			return 
		}

		return 
	}
}

module.exports = ItemsController
