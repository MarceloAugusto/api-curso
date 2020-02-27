'use strict'

const Helpers = use('Helpers')
const Env = use('Env')

class ImageController {
  async show({ params }) {
    return `${Env.get('APP_URL')}/uploads/${params.name}`
  }

  async store ({ request }) {

    const images = request.file('image', {
      types: ['image'],
      size: '5mb',
      overwrite: true
    })

    await images.moveAll(Helpers.publicPath('uploads'), file => ({
      name: file.clientName
    }))

    if (!images.movedAll()) {
      return images.errors()
    }

    return true
  }
}

module.exports = ImageController
