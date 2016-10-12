class ItemTree {
  constructor( items=[] ) {
    const map = items.reduce( this.itemReducer, {} )

    this.root = new ItemNode({ id: 0, title: 'Home' })
    map[ 0 ] = this.root

    items.forEach( item =>
      map[ item.parent_id ].addChild( map[ item.id ] )
    )
  }

  itemReducer(memo, item) {
    memo[ item.id ] = new ItemNode( item )

    return memo
  }
}

class ItemNode {
  constructor( item ) {
    const { id, parent_id, title, description, completed } = item

    this.id = id
    this.parent_id = parent_id
    this.title = title
    this.description = description
    this.completed = completed

    this.children = []
  }

  addChild( child ) {
    this.children.push( child )
  }
}

module.exports = ItemTree
