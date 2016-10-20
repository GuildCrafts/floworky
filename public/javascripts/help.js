$(document).ready( topicSelector() => {
  $( 'a.topic-selector' ).click( ( event ) => {
    event.preventDefault()

    // const element = $( event.target)
    // const topic_id = element.data( 'id' )
    // const viewed = ! element.userTopics( 'viewed')

    $( '.topic-content iframe' ).attr( 'src', $(this).data( 'url' ) )
    $( '.topic-content .content' ).text( $(this).data( 'content' ) )


    //insert association

    //toggle completed

    //show check mark
  })
})
