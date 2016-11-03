const ItemTree = require( '../../src/item_tree' )

const buildTree = items => ({ items, tree: new ItemTree( items )})

const pruneTree = (items, tree) => (ids) => {
  tree.pruneToItems( ids.map( item => item.id ))

  return { items, tree }
}

module.exports = { buildTree, pruneTree }
