const express = require('express')
const router = express.Router()

const { allItemsQuery, filteredItemsQuery, respondWithItems } = require( './items/item_response' )
const { buildTree } = require( './items/tree_creation' )

router.get( '/', ( request, response ) => {
  const Item = request.app.get( 'models' ).Item

  const { user, query } = request

  Item.findAll( allItemsQuery( user.id ))
    .then( buildTree )
    .then( filteredItemsQuery( Item, query, user.id ) )
    .then( respondWithItems( response, user ))
})

router.post( '/', ( request, response ) => {
  const Item = request.app.get( 'models' ).Item

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
