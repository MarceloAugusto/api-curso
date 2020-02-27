'use strict'

class Product {
  get rules () {
    return {
      name: 'required',
      value: 'required',
      quantity: 'required'
    }
  }

  get messages () {
    return {
      'name.required': 'Informe a propriedade name',
      'value.required': 'Informe a propriedade value',
      'quantity.required': 'Informe a propriedade quantity'
    }
  }
}

module.exports = Product
