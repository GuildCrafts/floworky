const { allItemsQuery, filteredItemsQuery, respondWithItems } = require( './item_response' )
const { buildTree } = require( './tree_creation' )

const buildFilteredItemTree = ( Item, user, query ) =>
  Item.findAll( allItemsQuery( user.id ))
    .then( buildTree )
    .then( filteredItemsQuery( Item, query, user.id ) )

module.exports = buildFilteredItemTree
