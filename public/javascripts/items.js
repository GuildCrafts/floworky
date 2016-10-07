const fetchParams = {
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  credentials: 'include'
}

const params = completed =>
  Object.assign( {}, fetchParams, { body: JSON.stringify({ completed }) })

$(document).ready( () => {
  $( '.title' ).click( event => {
    const element = $( event.target )
    const id = element.data( 'id' )
    const completed = ! element.data( 'completed' )

    fetch( `/items/${id}/completed`, params( completed ))
      .then( result => result.json() )
      .then( json => {
        if( json.success ) {
          element.data( 'completed', completed )

          const parent = $( `.item[data-id=${id}]` )
          if( completed ) {
            parent.addClass( 'completed' )
          } else {
            parent.removeClass( 'completed' )
          }
        }
      })
  })
})
