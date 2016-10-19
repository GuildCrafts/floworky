

// const params = data =>


const checkJsonForSuccessField = json => {
  if( json.success ) {
    Promise.resolve( json )
  } else {
    Promise.reject( json.message )
  }
}

// const supportToggle = () => {
//   $( '#help-support' ).click( ( event ) => {
//     $( '#support-content' ).toggleClass('current')
//   })
// }

const toggleOn = classToShow => {
  $( classToShow[ 0 ] ).addClass( 'viewed' )
}

const clickToUpdate = event => {
  const classToShow = $( event.target )

  toggleOn( classToShow )
}

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
