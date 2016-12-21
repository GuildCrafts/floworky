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

// const RESPOND_WITH_ITEMS_DATA = {
//   user: { id: 6, email: 'monicaestellaw@gmail.com' },
//   items:
//    [ Instance {
//        dataValues: [Object],
//        _previousDataValues: [Object],
//        _changed: {},
//        '$modelOptions': [Object],
//        '$options': [Object],
//        hasPrimaryKeys: true,
//        __eagerlyLoadedAssociations: [],
//        isNewRecord: false },
//      Instance {
//        dataValues: [Object],
//        _previousDataValues: [Object],
//        _changed: {},
//        '$modelOptions': [Object],
//        '$options': [Object],
//        hasPrimaryKeys: true,
//        __eagerlyLoadedAssociations: [],
//        isNewRecord: false } ],
//   breadcrumbs: [ { id: 10, title: 'Home' }, { id: 11, title: 'walk the dog' } ],
//   tree: [],
//   root:
//    ItemNode {
//      id: 11,
//      parent_id: 10,
//      title: 'walk the dog',
//      description: '',
//      completed: false,
//      starred: false,
//      is_root: true,
//      children: [] } }

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
