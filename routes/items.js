const express = require('express')
const router = express.Router()

const { respondWithItems, generateBreadcrumbs } = require( './items/item_response' )
const { buildSubTree } = require( './items/tree_creation' )
const buildFilteredItemTree = require( './items/build_filtered_item_tree' )

router.get( '/', ( request, response ) => {
  const { Item } = request.app.get( 'models' )

  const { user, query } = request

  buildFilteredItemTree( Item, user, query )
    .then( generateBreadcrumbs )
    .then( respondWithItems( user, data => response.render( 'items/index', data )))
})

router.get( '/:item_id', ( request, response ) => {
  const Item = request.app.get( 'models' ).Item

  const { user, query } = request
  const itemId = parseInt( request.params.item_id )

  buildFilteredItemTree( Item, user, query )
    .then( buildSubTree( itemId ))
    .then( generateBreadcrumbs )
    .then( respondWithItems( user, data => response.render( 'items/index', data ) ) )
})

router.post( '/', ( request, response ) => {
  const { Item } = request.app.get( 'models' )

  const { title, description, parent_id } = request.body

  Item.create({ title, description, parent_id, user_id: request.user.id })
    .then( result => response.redirect( '/items' ))
})

router.post( '/:id', ( request, response ) => {
  const Item = request.app.get( 'models' ).Item
  const { id } = request.params
  const where = { id, user_id: request.user.id }

  Item.update( Item.filterParameters( request.body ), { where })
    .then( result => response.json({ success: true, id }))
    .catch( error =>
      response.json({ success: false, id, message: error.message })
    )
})

module.exports = router
