const FETCH_PARAMS = {
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  credentials: 'include'
}

const params = data =>
  Object.assign( {}, FETCH_PARAMS, { body: JSON.stringify( data ) } )

const checkJsonForSuccessField = json => {
  if( json.success ) {
    Promise.resolve( json )
  } else {
    Promise.reject( json.message )
  }
}

const completedClicked = event => {
  const element = $( event.target )
  const topicId = element.data( 'id' )

  fetch( `/help/${topicId}`, params ( {viewed: true } ) )
    .then( result => result.json() )
    .then( checkJsonForSuccessField )
    .then( json => element.addClass( 'viewed' ))
}

$(document).ready( () => {
  $( '.topic-selector' ).click( completedClicked )
})
