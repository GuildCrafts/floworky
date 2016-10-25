
  
// const howToToggle = () => {
//   $( '#help-how-to' ).click( ( event ) => {
//     $( '#how-to-content' ).toggleClass('current')
//   })
// }

// const commandsToggle = () => {
//   $( '#help-commands' ).click( ( event ) => {
//     $( '#commands-content' ).toggleClass('current')
//   })
// }

// const supportToggle = () => {
//   $( '#help-support' ).click( ( event ) => {
//     $( '#support-content' ).toggleClass('current')
//   })
// }


$(document).ready( () => {

  $('#myTabs a[href="#how-to-content"]').tab('show')
  $('#myTabs a[href="#commands-content"]').tab('show')
  $('#myTabs a[href="#how-to-content"]').tab('show')


})
