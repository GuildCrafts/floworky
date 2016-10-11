const { pruneTree } = require( './tree_creation' )

const FETCH_ATTRIBUTES = [ 'title', 'description', 'completed', 'parent_id', 'id' ]

const allItemsQuery = user_id => (
  { order: [['createdAt', 'ASC']], where: { user_id }, FETCH_ATTRIBUTES }
)

const filteredItemsQuery = (Item, query, user_id) => ({ items, tree }) => {
  const where = Object.assign( {}, whereSearch( query ), whereCompleted( query), { user_id } )

  if( Object.keys( where ).length === 1 ) {
    return { items, tree }
  } else {
    return Item.findAll({ where, attributes: [ 'id' ] })
      .then( pruneTree( items, tree ))
  }
}

const whereSearch = query => {
  if( query.search ) {
    const matchClause = { ilike: `%${query.search}%` }

    return {
      $or: [{ title: matchClause }, { description: matchClause }]
    }
  }

  return {}
}

const whereCompleted = query => {
  if( query.completed_filter && query.completed_filter !== 'all' ) {
    return { completed: query.completed_filter === 'completed'}
  }

  return {}
}

const respondWithItems = (response, user) => ({ items, tree }) =>
  response.render( 'items/index', { user, items, tree: tree.children() })

module.exports = { allItemsQuery, filteredItemsQuery, respondWithItems }
