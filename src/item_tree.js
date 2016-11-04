const ItemNode = require( './item_node' )

class ItemTree {
  constructor( items=[], isAbsoluteRoot, rootId ) {
    this.items = items
    this.rootId = !isAbsoluteRoot ? rootId : null

    this.buildTree()
  }

  children() {
    return this.root.children
  }

  findRootId() {
    if ( this.rootId === null ) {
      return this.absoluteRoot
    } else {
      return this.relativeRoot
    }
  }

  get absoluteRoot() {
    return this.items.find( item => item.is_root ).id
  }

  get relativeRoot() {
    return this.items.find( item => (item.id === this.rootId) ).id
  }

  buildMap() {
    this.map = this.items.reduce( this.itemReducer, {} )
    this.root = this.map[ this.findRootId() ]
  }

  buildTree() {
    this.buildMap()

    this.items.forEach( item => {
      if ( ! item.is_root && item.parent_id != 0 ) {
        this.map[ item.parent_id ].addChild( this.map[ item.id ] )
      }
    })
  }

  subTree( id ) {
    const ids = this.bfs( this.map[ id ] )
      .map( node => node.id )
      .concat( this.findPathTo( id ))
      .concat( id )

    const items = this.items.filter( item => ids.includes( item.id ) )
      .map( item => Object.assign( {}, item.toJson(), { is_root: item.id === id } ))

    return new ItemTree( items, false, id )
  }

  bfs( node ) {
    if( node.hasChildren() ) {
      return node.children.reduce( (memo, child) => {
        return memo.concat( child, this.bfs( child ) )
      }, [] )
    } else {
      return []
    }
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
      return [ ...path.slice( 1 ) ]
    } else {
      const parent_id = this.map[ id ].parent_id

      return [ ...this.findPathTo( parent_id, [ parent_id, ...path ] ) ]
    }
  }
}

module.exports = ItemTree
