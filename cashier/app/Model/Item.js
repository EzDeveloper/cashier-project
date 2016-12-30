'use strict'

const Lucid = use('Lucid')

class Item extends Lucid {
	static get rules() {
		return {
			item_name:'required|unique',
			item_number:'required|unique',
			item_price:'required',
		}
	}
}

module.exports = Item
