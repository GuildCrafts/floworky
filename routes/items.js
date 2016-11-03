const express = require('express')
const router = express.Router()

const { allItemsQuery, filteredItemsQuery, respondWithItems } = require( './items/item_response' )
const { buildTree } = require( './items/tree_creation' )
const findAllItems = require('./items/find_all_items')

router.get( '/', ( request, response ) => {
  const { Item } = request.app.get( 'models' )

  const { user, query } = request

  findAllItems( Item, user, query )
    .then( respondWithItems( user, data => response.render( 'items/index', data ) ) )
})

router.post( '/', ( request, response ) => {
  const { Item } = request.app.get( 'models' )

  const { title, description, parent_id } = request.body

  Item.create({ title, description, parent_id, user_id: request.user.id })
    .then( result => response.redirect( '/items' ))
})

router.get( '/weekly', ( request, response ) => {
  response.render('items/weekly_review', {user: request.user})
})

router.post( '/:id', ( request, response ) => {
  const { Item } = request.app.get( 'models' )
  const { id } = request.params
  const where = { id, user_id: request.user.id }
console.log('pre',request.body);
  Item.filterParameters( request.body )
    .then( result => {
      console.log('post',result);
      const fields = Object.keys(result)
      return {result, fields}
    })
    .then(({result, fields}) => {
      let data_type_string = `Item.tableAttributes.${fields}.type.constructor.key`
      let data_type = eval(data_type_string)
      Item.update( result, { where, individualHooks: true, updateType: fields  , data_type: data_type  })  //request.body = {completed: true}
      .then( jsonResponse => {
        response.json({ success: true, id })
      })
      .catch( error => response.json({ success: false, id, message: error.message }))
    })

  // if ( request.body.hasOwnProperty('completed') ) {
  //   let old_value = ! request.body.completed
  //   console.log('old_value',old_value);
  //   Audit.create({
  //     table_name: 'Items',
  //     field_id: id,
  //     field_name: 'completed',
  //     old_value: old_value.toString(),
  //     new_value: request.body.completed.toString(),
  //     field_type: 'BOOLEAN',
  //     user_id: request.user.id
  //   })
  // }
})

module.exports = router
