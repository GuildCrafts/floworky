const express = require( 'express' )
const router = express.Router()
const moment = require( 'moment' )
const { numberOfTasksCreated, numberOfTasksCompleted, numberOfTasksEdited, totalNumberOfTasks } = require('./track_items')

router.get( '/', (request, response ) => {
  const { sequelize } = request.app.get( 'models' ).Item
  const { Item, Audit } = request.app.get( 'models' )
  const { user } = request
  const displayLastMonday = moment().startOf('isoWeek').format('LL')
  const lastMonday = moment().startOf('isoWeek').format('YYYY-MM-DD HH:mm:ss')

  Promise.all([
    numberOfTasksCreated( Item, lastMonday, user.id ),
    numberOfTasksEdited( sequelize, user.id, lastMonday ),
    numberOfTasksCompleted( sequelize, user.id, lastMonday ),
    totalNumberOfTasks( Item, user.id )
  ])
  .then( ([ tasksCreated, tasksEdited, tasksCompleted, tasksTotal ]) =>
    response.json({ tasksCreated, tasksEdited, tasksCompleted, tasksTotal, displayLastMonday })
  )
})

module.exports = router
