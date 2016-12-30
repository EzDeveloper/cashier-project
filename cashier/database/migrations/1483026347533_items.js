'use strict'

const Schema = use('Schema')

class ItemsTableSchema extends Schema {

  up () {
    this.create('items', (table) => {
      table.increments('item_id')
      table.string('item_name', 80)
      table.string('item_number', 100).unique()
      table.string('item_price', 100)
      table.timestamps()
    })
  }

  down () {
    this.drop('items')
  }

}

module.exports = ItemsTableSchema
