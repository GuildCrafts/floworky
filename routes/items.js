const express = require('express')
const router = express.Router()

router.get( '/', ( request, response ) => {
  const { user } = request
  
  response.render( 'items/index', { user })
})

module.exports = router
