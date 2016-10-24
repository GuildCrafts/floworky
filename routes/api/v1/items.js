const express = require( 'express' )
const router = express.Router()

const findAllItems = require('../../items/find_all_items')

router.get( '/', ( request, response ) => {
  const { Item } = request.app.get( 'models' )
  const { query, decoded } = request

  findAllItems( Item, decoded.user, query )
    .then( data => response.json( { data } ) )
})

router.post( '/create', ( request, response ) => {
  const { Item } = request.app.get( 'models' )

  const { title, description, parent_id } = request.body
  const { user } = request.decoded

  Item.create({ title, description, parent_id, user_id: user.id })
    .then( result => response.status( 200 ).json( {} ) )
})

module.exports = router
