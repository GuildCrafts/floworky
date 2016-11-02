const { allItemsQuery, filterSelectedItems } = require( './item_response' )
const { buildTree } = require( './tree_creation' )

const findAllItems = ( Item, user, query ) => 
  Item.findAll( allItemsQuery( user.id ))
    .then( buildTree )
    .then( filterSelectedItems( Item, query, user.id ) )

module.exports = findAllItems
