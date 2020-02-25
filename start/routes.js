'use strict'

const Route = use('Route')

Route.post('/sessions', 'SessionController.create')
Route.put('/sessions', 'SessionController.refreshToken')
Route.resource('users', 'UserController').apiOnly().middleware('auth:jwt')
Route.resource('clients', 'ClientController').apiOnly().middleware('auth:jwt')
Route.resource('exercises', 'ExerciseController').apiOnly().middleware('auth:jwt')
Route.resource('trainings', 'TrainingController').apiOnly().middleware('auth:jwt')

