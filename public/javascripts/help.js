
const completedClicked = event => {
  const element = $( event.target )
  const topicId = element.data( 'id' )

  fetch( `/help/${topicId}`, Object.assign( {}, 
    {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }, 
    { 
      body: JSON.stringify( { 
        viewed: true 
      }) 
    }) 
  )
    .then( result => result.json())
    .then( json => element.addClass( 'viewed' ))
}

$(document).ready( () => {
  $( '.topic-selector' ).click( completedClicked )
})

