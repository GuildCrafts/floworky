const ItemNode = require( './item_node' )

class ItemTree {
  constructor( items=[] ) {
    this.items = items

    this.buildTree()
  }

  children() {
    return this.root.children
  }

  buildMap() {
    this.map = this.items.reduce( this.itemReducer, {} )
    this.root = new ItemNode({ id: 0, title: 'Home' })
    this.map[ 0 ] = this.root
  }

  buildTree() {
    this.buildMap()

    this.items.forEach( item =>
      this.map[ item.parent_id ].addChild( this.map[ item.id ] )
    )
  }

  itemReducer( memo, item ) {
    memo[ item.id ] = new ItemNode( item )

    return memo
  }

  pruneToItems( ids ) {
    let idsToKeep = []

    for( const id of ids ) {
      const path = this.findPathTo( id, [ id ] )
      idsToKeep = idsToKeep.concat( path )
    }

    this.items = this.items.filter( item => idsToKeep.includes( item.id ) )
    this.buildTree()
  }

  findPathTo( id, path=[] ) {
    if( id === 0 ) {
      return path
    } else {
      const parent_id = this.map[ id ].parent_id

      return [ ...this.findPathTo( parent_id, [ parent_id, ...path ] ) ]
    }
  }
}

module.exports = ItemTree
