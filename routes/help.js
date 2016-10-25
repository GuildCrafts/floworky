const express = require( 'express' )
const router = express.Router()

const { allHelpItemsQuery } = require( './help/help_response' )

router.get( '/', ( request, response ) => {
  response.redirect( 'help/howtos' )
})

router.get( '/howtos', ( request, response ) => {
  const User = request.app.get('models').User

  const { user } = request

  User.find({ id: request.user.id })
    .then( user => user.getTopics() )
    .then( helpTopics  => {
      console.log(helpTopics)
      response.render( 'help/howtos', { topics: helpTopics } )
    })
})


module.exports = router
