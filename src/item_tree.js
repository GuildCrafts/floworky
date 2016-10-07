const Node = require( './node' )

class ItemTree {
  // PRECONDITION: items is in sorted order
  constructor( items=[] ) {
    this.root = new Node({ id: 0, title: 'Home' })

    items.forEach( item => this.insert({
      id: item.id,
      parent_id: item.parent_id,
      title: item.title,
      description: item.description,
      completed: item.completed
    }))
  }

  insert( entry ) {
    this.root.insert( new Node( entry ))
  }
}

module.exports = ItemTree
