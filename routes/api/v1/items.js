const express = require( 'express' )
const router = express.Router()

const findAllItems = require('../../items/find_all_items')

router.get( '/', ( request, response ) => {
  const { Item } = request.app.get( 'models' )
  const { query, decoded } = request

  findAllItems( Item, decoded.user, query )
    .then( data => response.json( { data } ) )
})

module.exports = router
