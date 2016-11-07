const express = require( 'express' )
const router = express.Router()

const buildFilteredItemTree = require( '../../items/build_filtered_item_tree' )

router.get( '/', ( request, response ) => {
  const { Item } = request.app.get( 'models' )
  const { query, decoded } = request

  buildFilteredItemTree( Item, decoded.user, query )
    .then( data => response.json( { data } ) )
})

router.post( '/', ( request, response ) => {
  const { Item } = request.app.get( 'models' )

  const { title, description, parent_id } = request.body
  const { user } = request.decoded

  Item.create({ title, description, parent_id, user_id: user.id })
    .then( result => response.status( 200 ).json( {} ) )
})

module.exports = router
