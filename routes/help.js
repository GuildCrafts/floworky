const express = require( 'express' )
const router = express.Router()

const { allHelpItemsQuery } = require( './help/help_response' )

router.get( '/', ( request, response ) => {
  response.redirect( 'help/howtos' )
})

router.get( '/howtos', ( request, response ) => {
  const User = request.app.get('models').User
  const Topic = request.app.get('models').Topic
  const UserTopic = request.app.get('models').UserTopic

  const { user } = request

  User.find({ id: request.user.id })
    .then( user => { 
      // console.log('--------------', user )
      console.log (user.getUsers() ) })
    .then( helpTopics  => {
      console.log( "YOUR HELP DATAAAAA", helpTopics )
      response.render( 'help/howtos', { topics: helpTopics } )
    })

  // UserTopic.findAll( allHelpItemsQuery( user.id ))
})


router.get( '/commands', ( request, response ) => {
  response.render( 'help/commands', { commands: data } )
})

router.get( '/support', ( request, response ) => {
  response.render( 'help/support' )
})

module.exports = router
