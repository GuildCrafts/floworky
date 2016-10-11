const searchQuery = require( '../../src/search_query' )
const { pruneTree } = require( './tree_creation' )

const FETCH_ATTRIBUTES = [ 'title', 'description', 'completed', 'parent_id', 'id' ]

const fetchItems = user_id => (
  { order: [['createdAt', 'ASC']], where: { user_id }, FETCH_ATTRIBUTES }
)

const testForSearch = (Item, searchOptions) => ({ items, tree }) => {
  if( searchOptions === undefined ) {
    return { items, tree }
  } else {
    return Item.findAll( searchQuery( searchOptions ))
      .then( pruneTree( items, tree ))
  }
}

const respondWithItems = (response, user) => ({ items, tree }) =>
  response.render( 'items/index', { user, items, tree: tree.children() })

module.exports = { fetchItems, testForSearch, respondWithItems }
