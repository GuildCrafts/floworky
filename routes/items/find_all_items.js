const { allItemsQuery, filterSelectedItems } = require( './item_response' )
const { buildTree } = require( './tree_creation' )

const findAllItems = ( Item, user, query, rootIsChild, rootId ) => 
  Item.findAll( allItemsQuery( user.id ))
    .then( items => buildTree(items, rootIsChild, rootId) )
    .then( filterSelectedItems( Item, query, user.id ) )

module.exports = findAllItems
