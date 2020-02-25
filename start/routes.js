'use strict'

const Route = use('Route')

Route.resource('users', 'UserController').apiOnly()
Route.resource('clients', 'ClientController').apiOnly()
Route.resource('exercises', 'ExerciseController').apiOnly()
Route.resource('trainings', 'TrainingController').apiOnly()
// .middleware('auth:jwt')

