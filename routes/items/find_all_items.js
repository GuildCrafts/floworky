const { allItemsQuery, filteredItemsQuery, respondWithItems } = require( './item_response' )
const { buildTree } = require( './tree_creation' )

const findAllItems = ( Item, user, query ) => {
  return Item.findAll( allItemsQuery( user.id ))
    .then( buildTree )
    .then( filteredItemsQuery( Item, query, user.id ) )
}

module.exports = findAllItems
