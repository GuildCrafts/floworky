const ITEMS_FIXTURE_DATA = [
  {
    id: 1,
    title: 'item 1',
    description: 'item 1 desc',
    completed: false,
    is_root: true,
    starred: false,
    parent_id: 0,
    user_id: 1
  },
  {
    id: 2,
    title: 'item 2',
    description: 'item 2 desc',
    completed: false,
    is_root: false,
    starred: false,
    parent_id: 1,
    user_id: 1
  },
]

const REQUEST_DATA = {
  app: {
    get: data => ({ Item: {
      create: () => new Promise( (resolve, reject) => resolve( ITEMS_FIXTURE_DATA ) ),
      findAll: () => new Promise( (resolve, reject) => resolve( ITEMS_FIXTURE_DATA ) )
    } })
  },
  body: {
    title: 'title',
    description: 'description',
    parent_id: 5
  },
  query: {},
  decoded: {
    user: { id: 1, query: {} }
  }
}

module.exports = { ITEMS_FIXTURE_DATA, REQUEST_DATA }
