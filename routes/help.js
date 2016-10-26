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
      // console.log(helpTopics)
      response.render( 'help/howtos', { topics: helpTopics, user } )
    })
})

router.post( '/:topicId', ( request, response ) => {
  console.log('GOT HERE!!!!!!!!!!!!!!!!!!!')
  const Topic = request.app.get('models').Topic
  const UserTopic = request.app.get('models').UserTopic
  const { topicId } = request.params
  const where = { topicId, topic_id: request.usertopic.topic_id}
  console.log('-----------',request.UserTopic)

  UserTopic.update( UserTopic.request.body, { where } )
    .then( result => console.log(result))
})

module.exports = router
