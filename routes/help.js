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

  UserTopic.findAll( allHelpItemsQuery( user.id ))
  .then( helpData => {
    console.log("YOUR HELP DATAAAAA", helpData)
    response.render( 'help/howtos', { topics: helpData } )
  })
})


router.get( '/commands', ( request, response ) => {
  response.render( 'help/commands', { commands: data } )
})

router.get( '/support', ( request, response ) => {
  response.render( 'help/support' )
})

module.exports = router
