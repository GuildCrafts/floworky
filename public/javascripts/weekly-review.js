openModalButton = event => {
  event.preventDefault()
  fetch( '/summary', fetchParams( 'GET' ) )
    .then( result => result.json() )
    .then( populateWeeklyData )
    .then( _ => $( '.weekly-summary-modal' ).show())
}

closeModalButton = event => {
  event.preventDefault()
  $( '.weekly-summary-modal' ).hide()
}

insertIntoElement = ( elementId, value ) => $( elementId ).html( value )

populateWeeklyData = ( data ) => {
  insertIntoElement( '#tasksCreated', data.tasksCreated )
  insertIntoElement( '#tasksEdited', data.tasksEdited )
  insertIntoElement( '#tasksCompleted', data.tasksCompleted )
  insertIntoElement( '#tasksTotal', data.tasksTotal )
  insertIntoElement( '#displayLastMonday', data.displayLastMonday )
}

$( document ).ready( () => {
  $( '.weekly-summary-modal__exit-button' ).click( closeModalButton )
  $( '#weekly-summary' ).click( openModalButton )
})
