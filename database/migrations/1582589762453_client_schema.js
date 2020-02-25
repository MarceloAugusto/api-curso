'use strict'

const Schema = use('Schema')

class AddressSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').notNullable().onDelete('CASCADE')
      table.string('address', 200).notNullable()
      table.integer('age').unsigned()
      table.integer('weight').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = AddressSchema
