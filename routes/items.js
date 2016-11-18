const express = require('express')
const router = express.Router()

const { respondWithItems, generateBreadcrumbs, respondWithStarred } = require( './items/item_response' )
const createAuditEntries = require( './items/audits' )
const { buildSubTree } = require( './items/tree_creation' )
const buildFilteredItemTree = require( './items/build_filtered_item_tree' )
const buildStarredItemArray = require( './items/build_starred_item_array' )

router.get( '/', ( request, response ) => {
  const { Item } = request.app.get( 'models' )

  const { user, query } = request

  buildFilteredItemTree( Item, user, query )
    .then( generateBreadcrumbs )
    .then( respondWithItems( user, data => response.render( 'items/index', data )))
})

router.get( '/starred', ( request, response ) => {
  const Item = request.app.get( 'models' ).Item
  const { user, query } = request

  buildStarredItemArray( Item, user.id )
    .then( data => response.json( { data } ) )
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
  const { Item, Audit } = request.app.get( 'models' )
  const { id } = request.params
  const user_id = parseInt( request.user.id )

  Item.findOne({ where: { id, user_id } })
    .then( item => {
      const oldItem = item
      item.update( Item.filterParameters( request.body ) )
      return oldItem
    })
    .then( createAuditEntries( Item, Audit, user_id ) )
    .then( result => response.json({ success: true, id }))
    .catch( error =>
      response.json({ success: false, id, message: error.message })
    )
})

module.exports = router
