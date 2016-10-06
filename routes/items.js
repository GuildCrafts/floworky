const express = require('express')
const router = express.Router()

router.get( '/', ( request, response ) => {
  const { user } = request

  response.render( 'items/index', { user })
})

router.post( '/', ( request, response ) => {
  const Item = request.app.get( 'models' ).Item
  const { title, description } = request.body
  const user_id = request.user.id
  Item.create({ title, description, user_id})
    .then( result => response.redirect( '/items' ))
})

module.exports = router
