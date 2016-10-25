const express = require( 'express' )
const router = express.Router()

router.get('/', ( request, response ) => {
  response.redirect( 'help/howtos' )
})

router.get('/howtos', ( request, response ) => {
  const User = request.app.get('models').User
  console.log('users are here ------------------', User)
  const Topic = request.app.get('models').Topic
  const UserTopic = request.app.get('models').UserTopic

  const {users} = request.body

  response.render( 'help/howtos', { topics: users } )
})


router.get('/commands', ( request, response ) => {


  response.render( 'help/commands', { commands: data } )
})

router.get('/support', ( request, response ) => {
  response.render( 'help/support' )
})

module.exports = router
