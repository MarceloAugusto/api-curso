'use strict'

const Route = use('Route')

Route.post('/sessions', 'SessionController.create')
Route.put('/sessions', 'SessionController.refreshToken')

Route.resource('users', 'UserController').apiOnly().middleware(['auth:jwt', 'is:manager']).validator(new Map([
  [['users.store'], ['User']], [['users.update'], ['User']]
]))

Route.resource('clients', 'ClientController').apiOnly().middleware(['auth:jwt', 'is:manager']).validator(new Map([
  [['clients.store'], ['Client']], [['clients.update'], ['Client']]
]))

Route.resource('exercises', 'ExerciseController').apiOnly().middleware(['auth:jwt', 'can:gerenc_exercises']).validator(new Map([
  [['exercises.store'], ['Exercise']], [['exercises.update'], ['Exercise']]
]))

Route.resource('trainings', 'TrainingController').apiOnly().middleware(['auth:jwt', 'can:gerenc_trainings']).validator(new Map([
  [['trainings.store'], ['Training']], [['trainings.update'], ['Training']]
]))

Route.resource('permissions', 'PermissionController').apiOnly().middleware(['auth:jwt', 'is:manager']).validator(new Map([
  [['permissions.store'], ['NameSlug']], [['permissions.update'], ['NameSlug']]
]))

Route.resource('roles', 'RoleController').apiOnly().middleware(['auth:jwt', 'is:manager']).validator(new Map([
  [['roles.store'], ['NameSlug']], [['roles.update'], ['NameSlug']]
]))
