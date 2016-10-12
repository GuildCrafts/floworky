const express = require('express')
const router = express.Router()

const ItemTree = require( '../src/item_tree' )

router.get( '/', ( request, response ) => {
  const Item = request.app.get( 'models' ).Item

  const { user } = request

  const user_id = user.id
  const attributes = [ 'title', 'description', 'completed', 'parent_id', 'id' ]

  Item.findAll({ order: [['parent_id', 'ASC']], where: { user_id }, attributes })
    .then( items => {
      const tree = new ItemTree( items )

      response.render( 'items/index', { user, items, tree: tree.root.children })
    })
})

router.post( '/', ( request, response ) => {
  const Item = request.app.get( 'models' ).Item

  const { title, description, parent_id } = request.body
  const user_id = request.user.id

  Item.create({ title, description, parent_id, user_id })
    .then( result => response.redirect( '/items' ))
})

router.post( '/:id/completed', ( request, response ) => {
  const Item = request.app.get( 'models' ).Item

  const { id } = request.params
  const { completed } = request.body
  const user_id = request.user.id

  Item.update({ completed }, { where: { id, user_id }})
    .then( result => response.json({ success: true, id }))
    .catch( error => response.json({ success: false, id, message: error.message }))
})

module.exports = router
