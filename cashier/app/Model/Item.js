'use strict'

const Lucid = use('Lucid')

class Item extends Lucid {
	static get rules() {
		return {
			item_name:'required|unique:items',
			item_number:'required|unique:items',
			item_price:'required',
		}
	}
}

module.exports = Item
