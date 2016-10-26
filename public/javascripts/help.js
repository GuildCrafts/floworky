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


const toggleOn = classToShow => {
  $( classToShow[ 0 ] ).addClass( 'viewed' )
}

const clickToUpdate = event => {
  const classToShow = $( event.target )

  toggleOn( classToShow )
}

const completedClicked = event => {
  const element = $( event.target )
  const id = element.data( 'id' )
  const completed = ! element.data( 'completed' )

  fetch( `/items/${id}`, params({ completed: completed } ) )
    .then( result => result.json() )
    .then( checkJsonForSuccessField )
    .then( json => { 
      const parent = $( `.title[data-id=${id}]` )
        element.data( 'completed', completed )
        if( completed ) {
          parent.addClass( 'completed' )
        }
      }
    )
  }


$(document).ready( () => {
  $( '.topic-selector').click( () => {
    $(this).addClass('viewed')
  })
  // $( '.topic-selector' ).click( clickToUpdate( '.topic-selector' ))
  // $( '.description > span' ).click( clickToUpdate( 'description' ))
  // $( '.completeToggle' ).click( completedClicked )
})

