'use strict'

const Schema = use('Schema')

class ProdutosSchema extends Schema {
  static get connection () {
    return 'oldMysql'
  }

  up () {
    this.create('produtos', (table) => {
      table.increments()
      table.string('name', 60).notNullable()
      table.decimal('value', [2, 10]).notNullable()
      table.integer('quantity').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('produtos')
  }
}

module.exports = ProdutosSchema
