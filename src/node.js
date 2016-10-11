class Node {
  constructor( item=null ) {
    this.item = item
    this.children = []
  }

  insert( node ) {
    if( this.item.id === node.item.parent_id ) {
      this.children.push( node )
    } else {
      if(this.children.length>0){
        for (let child of this.children){
            child.insert(node)
        }
      }
    }
  }
}

module.exports = Node
