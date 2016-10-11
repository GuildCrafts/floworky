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

module.exports = ItemNode
