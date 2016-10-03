const express = require('express')
const router = express.Router()

router.get( '/', ( request, response, next ) => {
  const { user } = request

  response.render( 'items/index', { user })
})

router.post( '/create', ( request, response, next ) => {
  // console.log( request.session )
  // const user_id = request.session.passport.user.id
  const Item = request.app.get( 'models' ).Item
  const { title, description } = request.body
  const { id } = request.user
  const user_id = id
  Item.create({ title, description, user_id})
    .then( result => {
      // console.log( 'Item Result', result )


      response.redirect( '/items' )
    })
})


module.exports = router
