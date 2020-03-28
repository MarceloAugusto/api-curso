'use strict'

const Exercise = use('App/Models/Exercise')
const Helpers = use('Helpers')

class ExerciseController {
  async index () {
    return await Exercise.all()
  }

  async show ({ params }) {
    const exercise = await Exercise.findOrFail(params.id)
    return exercise
  }

  async store ({ request, response }) {
    const data = request.only([
      'name',
      'observation',
      'series',
      'waiting_time'
    ])

    const photo = request.file('image', {
      types: ['image'],
      size: '2mb'
    })

    if (photo) {
      const image = await Exercise.findBy('url_image', photo.clientName)
      if (image) {
        return response.status(400).send({ error: { message: 'Imagem duplicada, modifique o nome.', name: 'DuplicateImage', status: 400 } })
      }

      await photo.move(Helpers.publicPath('exercises'))

      data.url_image = photo.clientName
    }

    return await Exercise.create(data)
  }

  async update ({ params, request }) {
    const exercise = await Exercise.findOrFail(params.id)
    const data = request.only([
      'name',
      'observation',
      'series',
      'waiting_time',
      'url_image'
    ])

    exercise.merge(data)
    return await exercise.save()
  }

  async destroy ({ params }) {
    const exercise = await Exercise.findOrFail(params.id)
    return await exercise.delete()
  }
}

module.exports = ExerciseController
