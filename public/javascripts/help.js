$(document).ready( function() {
  $( 'a.topic-selector' ).click( function( event ) {
    event.preventDefault()

    $( '.topic-content iframe' ).attr( 'src', $(this).data( 'src' ) )
    $( '.topic-content .content' ).text( $(this).data( 'content' ) )
  })
})
