'use strict'

const Product = use('App/Models/Product')

class ProductController {
  async index () {
    return await Product.all()
  }

  async show ({ params }) {
    const product = await Product.findOrFail(params.id)
    return product
  }

  async store ({ request }) {
    const data = request.only([
      'name',
      'value',
      'quantity'
    ])

    return await Product.create(data)
  }

  async update ({ params, request }) {
    const product = await Product.findOrFail(params.id)
    const data = request.only([
      'name',
      'value',
      'quantity'
    ])

    product.merge(data)

    return await product.save()
  }

  async destroy ({ params }) {
    const product = await Product.findOrFail(params.id)
    return await product.delete()
  }
}

module.exports = ProductController
