const express = require('express')
const router = express.Router()

const { selectedItemsQuery, generateBreadcrumbs, respondWithItems } = require( './items/item_response' )
const findAllItems = require('./items/find_all_items')

router.get( '/', ( request, response ) => {
  const { Item } = request.app.get( 'models' )
  const { user, query } = request
  const isAbsoluteRoot = true

  findAllItems( Item, user, query, isAbsoluteRoot )
    .then( generateBreadcrumbs )
    .then( respondWithItems( user, data => response.render( 'items/index', data ) ) )
})

router.get( '/:item_id', ( request, response ) => {
  const Item = request.app.get( 'models' ).Item
  const { user } = request
  const isAbsoluteRoot = false
  const rootId = parseInt( request.params.item_id )
  const query = selectedItemsQuery(rootId)

  findAllItems( Item, user, query, isAbsoluteRoot, rootId )
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
