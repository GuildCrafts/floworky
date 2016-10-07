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
  const { title, description } = request.body
  const user_id = request.user.id

  Item.create({ title, description, user_id})
    .then( result => response.redirect( '/items' ))
})

module.exports = router
