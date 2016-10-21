const express = require( 'express' )
const router = express.Router()

router.get('/', ( request, response ) => {

  response.redirect( 'help/howtos' )
})

router.get('/howtos', ( request, response ) => {

  response.render( 'help/howtos', { topics: data } )
})


router.get('/commands', ( request, response ) => {


  response.render( 'help/commands', { commands: data } )
})

router.get('/support', ( request, response ) => {
  response.render( 'help/support' )
})

module.exports = router
