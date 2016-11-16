const populateHUD = () => {
  $( '.starred-view__container' ).empty()

  const page = ( id, title ) =>
    $( '<a>', { href: `/items/${id}`, class: 'starred-view__page' })
      .append( '<div>', { class: 'starred-view__inner-container' }, `${title}` )

  fetch( '/items/starred', fetchParams( 'GET' ) )
    .then( result => result.json() )
    .then( ({ data }) => $( '.starred-view__container' ).append(
      data.map( item => page( item.id, item.title ) )
   ))
}

$( document ).ready( () => {

  $( '#star-toggle' ).click( event => {
    event.preventDefault()

    populateHUD()
    if ($( '.starred-view__HUD' ).css( 'opacity' ) === '0' ) {
      $( '.starred-view__HUD' ).css({ 'opacity': '1', 'pointer-events': 'auto' })
    } else {
      $( '.starred-view__HUD' ).css({ 'opacity': '0', 'pointer-events': 'none' })
    }
  })
})
