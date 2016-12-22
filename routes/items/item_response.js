const { pruneTree } = require( './tree_creation' )

const FETCH_ATTRIBUTES = [ 'title', 'description', 'completed', 'starred', 'is_root', 'parent_id', 'id', 'is_deleted' ]

const createRootItem = Item => user => {
  return Item.create({
    is_root: true,
    parent_id: 0,
    title: 'Home',
    description: 'Welcome to Floworky',
    user_id: user.id,
    is_deleted: false
  }).then( result => user )
}

const allItemsQuery = user_id => (
  { order: [['createdAt', 'ASC']], where: { user_id }, FETCH_ATTRIBUTES }
)

const filterClause = ( query, user_id ) =>
  ({
    where: Object.assign(
      {},
      whereSearch( query ),
      whereCompleted( query ),
      whereStarred( query ),
      { user_id }
    )
  })

const filteredItems = ( Item, filter, attributes ) =>
  Item.findAll( Object.assign( {}, filter, { attributes }) )

const filteredItemsQuery = ( Item, query, user_id ) => ({ items, tree }) => {
  const filter = filterClause( query, user_id )
  return filteredItems( Item, filter, [ 'id' ] ).then( pruneTree( items, tree ))
}

const generateBreadcrumbs = ({ items, tree }) => {
  const ids = tree.findPathTo( tree.findRootId(), [ tree.findRootId() ] )

  const map = items.reduce( ( memo, item ) => {
    memo[ item.id ] = { id: item.id, title: item.title }

    return memo
  }, {} )

  const breadcrumbs = ids.map( id => map[ id ] )

  return { items, tree, breadcrumbs }
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

const whereStarred = query => {
  if( query.starred ) {
    return { starred: true }
  }

  return {}
}

const respondWithItems = ( user, callback ) => ({ items, tree, breadcrumbs }) =>
  callback({ user, items, breadcrumbs, tree: tree.children(), root: tree.root })

const respondWithStarred = ( user, callback ) => data =>
  callback({ user })

module.exports = {
  allItemsQuery,
  filteredItemsQuery,
  respondWithItems,
  generateBreadcrumbs,
  createRootItem,
  filteredItems,
  filterClause,
  respondWithStarred
}
