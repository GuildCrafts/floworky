class ItemNode {
  constructor( item ) {
    const { id, parent_id, title, description, completed, starred, is_root } = item

    this.id = id
    this.parent_id = parent_id
    this.title = title
    this.description = description
    this.completed = completed
    this.starred = starred
    this.is_root = is_root

    this.children = []
  }

  addChild( child ) {
    this.children.push( child )
  }

  hasChildren() {
    return this.children.length > 0
  }

  toString() {
    return `[${this.id}] "${this.title}"`
  }
}

module.exports = ItemNode
