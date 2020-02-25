'use strict'

const Exercise = use('App/Models/Exercise')

class ExerciseController {
  async index () {
    return await Exercise.all()
  }

  async show ({ params }) {
    const exercise = await Exercise.findOrFail(params.id)
    return exercise
  }

  async store ({ request }) {
    const data = request.only([
      'name',
      'observation',
      'series',
      'waiting_time',
      'url_image'
    ])

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
