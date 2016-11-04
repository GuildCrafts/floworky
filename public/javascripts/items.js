const FETCH_PARAMS = {
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  credentials: 'include'
}

const RETURN_KEY = 13

const params = data =>
  Object.assign( {}, FETCH_PARAMS, { body: JSON.stringify( data ) } )

const checkJsonForSuccessField = json => {
  if( json.success ) {
    console.log('checking for json success');
    Promise.resolve( json )
  } else {
    console.log('rejecting for json failure');
    Promise.reject( json.message )
  }
}

const selector = ( parent, id, tagToShow ) =>
  `.${parent}[data-id=${id}] > ${tagToShow}`

const toggle = ( elementToShow, elementToHide ) => {
  $( elementToHide[ 0 ] ).addClass( 'hidden' )
  $( elementToShow[ 0 ] ).removeClass( 'hidden' )
}

const clickToUpdate = parentClass => event => {
  const elementToHide = $( event.target )
  const id = elementToHide.data( 'id' )
  const elementToShow = $( selector( parentClass, id, 'input' ) )

  toggle( elementToShow, elementToHide )
}

const titleEdited = event => {
  const elementToHide = $( event.target )
  const id = elementToHide.data( 'id' )
  const elementToShow = $( selector( 'title', id, 'span' ) )

  if( event.charCode === RETURN_KEY ) {
    let updatedTitle = elementToHide[0].value
    fetch( `/items/${id}`, params( { title: updatedTitle } ) )
      .then( result => result.json() )
      .then ( checkJsonForSuccessField )
      .then( json => {
        toggle( elementToShow, elementToHide )
        $( elementToShow[0] ).html(updatedTitle)
    })
  }
}

const descriptionEdited = event => {
  const elementToHide = $( event.target )
  const id = elementToHide.data( 'id' )
  const elementToShow = $( selector( 'description', id, 'span' ) )

  if( event.charCode === RETURN_KEY ) {
    let updatedDescription = elementToHide[0].value
    fetch( `/items/${id}`, params( { description: updatedDescription } ) )
      .then( result => result.json() )
      .then ( checkJsonForSuccessField )
      .then( json => {
        toggle( elementToShow, elementToHide )
        $( elementToShow[0] ).html( updatedDescription )
    })
  }
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
        } else {
          parent.removeClass( 'completed' )
        }
      }
    )
  }



$(document).ready( () => {
  $( '.edit-title' ).keypress( titleEdited )
  $( '.title > span' ).click( clickToUpdate( 'title' ))
  $( '.edit-description' ).keypress( descriptionEdited )
  $( '.description > span' ).click( clickToUpdate( 'description' ))
  $( '.completeToggle' ).click( completedClicked )
})
