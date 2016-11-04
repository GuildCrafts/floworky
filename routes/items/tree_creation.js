const ItemTree = require( '../../src/item_tree' )

const buildTree = (items, rootIsChild, rootId) => ({ items, tree: new ItemTree( items, rootIsChild, rootId )})

const buildSubTree = item_id => ({items, tree}) =>
  ({items, tree: tree.subTree( item_id ) })

const pruneTree = (items, tree) => (ids) => {
  tree.pruneToItems( ids.map( item => item.id ))
  return { items, tree }
}

module.exports = { buildTree, buildSubTree, pruneTree }
