const expect = require( 'chai' ).expect
const ItemNode = require( '../../src/item_node' )

const NODE_DATA = {
  id: 42,
  parent_id: 29,
  title: 'title',
  description: 'description',
  completed: true,
  starred: false,
  is_root: true,
  children: []
}

describe( 'ItemNode', () => {
  describe( '#new', () => {
    it( 'constructs the object correctly', () => {
      const node = new ItemNode( NODE_DATA )

      expect( node ).to.eql( NODE_DATA )
    })
  })

  describe( '#addChild', () => {
    const child = 'petulant'
    const node = new ItemNode( NODE_DATA )

    node.addChild( child )
    expect( node.children ).to.include( child )
  })

  describe( '#hasChildren', () => {
    context( 'when node contains no children', () => {
      it( 'returns false', () => {
        const node = new ItemNode( NODE_DATA )

        expect( node.hasChildren() ).to.be.false
      })
    })

    context( 'when node contains children', () => {
      it( 'returns true', () => {
        const node = new ItemNode( NODE_DATA )
        node.addChild( 1 )

        expect( node.hasChildren() ).to.be.true
      })
    })
  })

  describe( '#toString', () => {
    it( 'returns the string representation', () => {
      const node = new ItemNode( NODE_DATA )

      expect( node.toString() ).to.eql( `[${NODE_DATA.id}] "${NODE_DATA.title}"` )
    })
  })
})
