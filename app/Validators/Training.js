'use strict'

class Training {
  get rules () {
    return {
      name: 'required',
      client_id: 'required'
    }
  }

  get messages () {
    return {
      'name.required': 'Informe a propriedade name',
      'client_id.required': 'Informe a propriedade client_id'
    }
  }
}

module.exports = Training
