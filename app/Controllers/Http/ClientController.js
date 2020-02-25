'use strict'

const Client = use('App/Models/Client')

class ClientController {
  async index () {
    return await Client.all()
  }

  async show ({ params }) {
    const client = await Client.findOrFail(params.id)
    await client.load('user')
    return client
  }

  async store ({ request }) {
    const data = request.only([
      'user_id',
      'address',
      'age',
      'weight'
    ])

    return await Client.create(data)
  }

  async update ({ params, request }) {
    const client = await Client.findOrFail(params.id)
    const data = request.only([
      'user_id',
      'address',
      'age',
      'weight'
    ])

    client.merge(data)

    return await client.save()
  }

  async destroy ({ params }) {
    const client = await Client.findOrFail(params.id)
    return await client.delete()
  }
}

module.exports = ClientController
