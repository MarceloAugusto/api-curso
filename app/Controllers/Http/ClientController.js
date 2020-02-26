'use strict'

const Client = use('App/Models/Client')
const Antl = use('Antl')

class ClientController {
  async index () {
    return await Client.all()
  }

  async show ({ params, locale }) {
    const client = await Client.findOrFail(params.id)
    await client.load('user')

    const user = client.getRelated('user')

    if (client.age >= 60) {
      client.observation = Antl.forLocale(locale).formatMessage('messages.warning', { name: user.name })
    }

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
