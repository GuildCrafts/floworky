const express = require('express')
const router = express.Router()

const { allItemsQuery, filteredItemsQuery, respondWithItems } = require( './items/item_response' )
const { buildTree } = require( './items/tree_creation' )
const findAllItems = require('./items/find_all_items')
const grabUserStats = require('../src/weekly_report')

router.get( '/', ( request, response ) => {
  const { Item } = request.app.get( 'models' )

  const { user, query } = request

  findAllItems( Item, user, query )
    .then( respondWithItems( user, data => response.render( 'items/index', data ) ) )
})

router.post( '/', ( request, response ) => {
  const { Item } = request.app.get( 'models' )

  const { title, description, parent_id } = request.body

  Item.create({ title, description, parent_id, user_id: request.user.id  }, {updateType: ['create'], individualHooks: true, data_type: 'JSON'  })
    .then( result => response.redirect( '/items' ))
})

router.get( '/weekly', ( request, response ) => {
  const {User, Audit, Item} = request.app.get('models')

  const user_id = request.user.id
  // console.log('uid: ', request.user.id);
  grabUserStats( User, user_id, Audit, Item)
    .then(  userStats => {
      console.log('>>>>>>>>>', userStats)
      response.render('items/weekly_review', {userStats})
    })
})

router.post( '/:id', ( request, response ) => {
  const {Item, Audit} = request.app.get( 'models' )
  const { id } = request.params
  const where = { id, user_id: request.user.id }
  const valid_params = Item.filterParameters( request.body )
  const fields = Object.keys(valid_params)
  let data_type_string = `Item.tableAttributes.${fields}.type.constructor.key`
  const data_type = eval(data_type_string)


  Item.update( valid_params, { where, data_type, updateType: fields, individualHooks: true})
    .then( result => response.json({ success: true, id }))
    .catch( error =>
      response.json({ success: false, id, message: error.message })
    )
  })

module.exports = router
