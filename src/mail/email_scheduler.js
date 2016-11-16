const schedule = require('node-schedule')
const { User, Audit } = require( '../../models/index' )
const WeeklyReview = require('./weekly_review')

const emailList = users =>
  users.forEach( user =>
    Audit.find({ where: { user_id: user.id }, raw: true })
      .then( review => {
        if ( review ) {
          WeeklyReview.send( user.email, review )
        }
      })
  )

const review = schedule.scheduleJob('1 * * * * *', () =>
  User.findAll({ attributes: [ 'id', 'email' ], raw: true })
    .then( users => emailList( users ) )
  )

module.exports = review
