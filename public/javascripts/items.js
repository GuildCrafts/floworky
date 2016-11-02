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
    Promise.resolve( json )
  } else {
    Promise.reject( json.message )
  }
}

const selector = ( parent, id, tagToShow ) =>
  `.${parent}[data-id=${id}] > ${tagToShow}`

const toggle = ( elementToShow, elementToHide ) => {
  $( elementToHide[ 0 ] ).addClass( 'item--hidden' )
  $( elementToShow[ 0 ] ).removeClass( 'item--hidden' )
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
  const elementToShow = $( selector( 'item__title', id, 'span' ) )
  if( event.keyCode === RETURN_KEY ) {
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
  const elementToShow = $( selector( 'item__description', id, 'span' ) )
  if( event.keyCode === RETURN_KEY ) {
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
      const parent = $( `.item__title[data-id=${id}]` )
        element.data( 'completed', completed )
        if( completed ) {
          parent.addClass( 'item__title--completed' )
        } else {
          parent.removeClass( 'item__title--completed' )
        }
      }
    )
  }

  const getFilterStatus = () => {
    const pageURL= decodeURIComponent(window.location.search)
    const parameterMatch = /completed_filter=(.*)/
    let filterStatus = parameterMatch.exec(pageURL)
    if(filterStatus === null){
      $('#btn--completed').removeClass('btn--hidden')
      return
    }
    switch (filterStatus[1]){
      case 'completed':
        $('#btn--incomplete').removeClass('btn--hidden')
        break
      case 'incomplete':
        $('#btn--all').removeClass('btn--hidden')
        break
      default:
        $('#btn--completed').removeClass('btn--hidden')
      }
    }

    const dropdownToggle = () => {
      if($('.dropdown__menu').hasClass('dropdown--hidden')){
        $('.dropdown__menu').removeClass('dropdown--hidden')
        $('.dropdown__toggle').addClass('dropdown__toggle--open')
          } else {
        $('.dropdown__menu').addClass('dropdown--hidden')
        $('.dropdown__toggle').removeClass('dropdown__toggle--open')
      }
    }


$(document).ready( () => {
  $( '.item__edit-title' ).keypress( titleEdited )
  $( '.item__title > span' ).click( clickToUpdate( 'item__title' ))
  $( '.item__edit-description' ).keypress( descriptionEdited )
  $( '.item__description > span' ).click( clickToUpdate( 'item__description' ))
  $( '.item__toggle' ).click( completedClicked )
  $('.dropdown__toggle').click( dropdownToggle )
  getFilterStatus()
})
