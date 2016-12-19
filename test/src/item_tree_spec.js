const expect = require( 'chai' ).expect
const ItemTree = require( '../../src/item_tree' )

const ITEMS_DATA =
  [
    { id: 27,
      title: 'Home',
      description: 'Welcome to Floworky',
      completed: false,
      is_root: true,
      starred: false,
      parent_id: 0,
      user_id: 3,
      createdAt: '2016-11-23T18:22:54.352Z',
      updatedAt: '2016-11-23T18:22:54.352Z' },
    { id: 28,
      title: 'Parent',
      description: '',
      completed: false,
      is_root: false,
      starred: false,
      parent_id: 27,
      user_id: 3,
      createdAt: '2016-11-23T18:23:43.126Z',
      updatedAt: '2016-11-23T18:23:43.126Z' },
    { id: 29,
      title: 'Child',
      description: '',
      completed: false,
      is_root: false,
      starred: false,
      parent_id: 28,
      user_id: 3,
      createdAt: '2016-11-23T18:23:51.396Z',
      updatedAt: '2016-11-23T18:23:51.396Z' }
  ]

const TREE_MAP_DATA =
  { '27':
    { id: 27,
      title: 'Home',
      description: 'Welcome to Floworky',
      completed: false,
      is_root: true,
      starred: false,
      parent_id: 0,
      children: [{
        id: 28,
          title: 'Parent',
          description: '',
          completed: false,
          is_root: false,
          starred: false,
          parent_id: 27,
          children: [{
            id: 29,
              title: 'Child',
              description: '',
              completed: false,
              is_root: false,
              starred: false,
              parent_id: 28,
              children: []
          }]
      }]
    },
    '28':
    { id: 28,
      title: 'Parent',
      description: '',
      completed: false,
      is_root: false,
      starred: false,
      parent_id: 27,
      children: [{
        id: 29,
          title: 'Child',
          description: '',
          completed: false,
          is_root: false,
          starred: false,
          parent_id: 28,
          children: []
      }]
    },
    '29': { id: 29,
      title: 'Child',
      description: '',
      completed: false,
      is_root: false,
      starred: false,
      parent_id: 28,
      children: []
    }
  }

const TREE_ROOT_DATA =
  { id: 27,
    title: 'Home',
    description: 'Welcome to Floworky',
    completed: false,
    is_root: true,
    starred: false,
    parent_id: 0,
    children: [{
      id: 28,
        title: 'Parent',
        description: '',
        completed: false,
        is_root: false,
        starred: false,
        parent_id: 27,
        children: [{
          id: 29,
            title: 'Child',
            description: '',
            completed: false,
            is_root: false,
            starred: false,
            parent_id: 28,
            children: []
        }]
    }]
  }


const TREE_DATA = {
  items: ITEMS_DATA,
  map: TREE_MAP_DATA,
  root: TREE_ROOT_DATA
}

describe( 'ItemTree', () => {
  describe( '#new', () => {
    it( 'constructs the object with the correct items data structure', () => {
      const tree = new ItemTree( ITEMS_DATA )

      expect( tree.items ).to.eql( ITEMS_DATA )
    })
    it( 'constructs the object correctly', () => {
      const tree = new ItemTree( ITEMS_DATA )

      expect( tree ).to.eql( TREE_DATA )
    })
  })
})
