const express = require( 'express' )
const router = express.Router()

const { allHelpItemsQuery } = require( './help/help_response' )

router.get( '/', ( request, response ) => {
  response.redirect( 'help/howtos' )
})

router.get( '/howtos', ( request, response ) => {
  const User = request.app.get('models').User
  const { user } = request

  User.findById( request.user.id )
    .then( user => user.getTopics() )
    .then( helpTopics  => {
      response.render( 'help/howtos', { topics: helpTopics } )
    })
})

router.post( '/:topicId', ( request, response ) => {
  const UserTopic = request.app.get('models').UserTopic
  
  const { topicId } = request.params
  const userId = request.user.id
  const where = { topic_id: topicId, user_id: userId}

  UserTopic.update( { viewed: true }, { where } )
    .then( result => 
      response.json({ success: true, topicId })
    )
    .catch( error => 
      response.json({ success: false, id, message: error.message })
    )
})


module.exports = router
