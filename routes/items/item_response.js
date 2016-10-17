const { pruneTree } = require( './tree_creation' )

const FETCH_ATTRIBUTES = [ 'title', 'description', 'completed', 'is_root', 'parent_id', 'id' ]

const createRootItem = Item => user => {
  return Item.create({
    is_root: true,
    parent_id: 0,
    title: 'Home',
    description: 'Welcome to Floworky',
    user_id: user.id
  }).then( result => user )
}

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

const selectedItemsQuery = item_id => (
  { order: [['createdAt', 'ASC']], where: {
    $or: [
      { id: item_id },
      { parent_id: item_id }
    ]
  }, FETCH_ATTRIBUTES }
)

const filterSelectedItems = (Item, query, user_id) => ({ items, tree }) => {
  const where = Object.assign( {}, whereSearch( query ), whereCompleted( query), { user_id } )

  if( Object.keys( where ).length === 1 ) {
    return { items, tree }
  } else {
    return Item.findAll({ where, attributes: [ 'id' ] })
      .then( pruneTree( items, tree ))
  }
}

const generateBreadcrumbs = itemId => ({ items, tree }) => {
  const ids = tree.findPathTo( itemId )
  
  const breadcrumbs = ids.map( id => 
    items.find( item => item.id === id ).title
  )

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

const respondWithItems = (response, user) => ({ items, tree, breadcrumbs }) => {
  let treeRoot = tree.root
  response.render( 'items/index', { user, items, breadcrumbs, tree: tree.children(), root: treeRoot })
}

module.exports = { allItemsQuery, filteredItemsQuery, respondWithItems, generateBreadcrumbs, createRootItem }
