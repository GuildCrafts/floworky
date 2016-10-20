$(document).ready( topicSelector() => {
  $( 'a.topic-selector' ).click( ( event ) => {
    event.preventDefault()

    $( '.topic-content iframe' ).attr( 'src', $(this).data( 'url' ) )
    $( '.topic-content .content' ).text( $(this).data( 'content' ) )

    //insert association
    
    //toggle completed
    if(viewed)
    //show check mark
  })
})
