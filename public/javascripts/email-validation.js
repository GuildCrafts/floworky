const forms = document.getElementsByTagName( 'form' )

for( let i = 0; i < forms.length; i++ ) {
  forms[ i ].addEventListener( 'invalid', event => {
    event.preventDefault()
  }, true )
}

document.getElementById( 'email' ).addEventListener( 'change', event => {
  const emailContainerClasses = document.querySelector( '.email-container' ).classList
  const helpClasses = document.querySelector( '.email-container .help-block' ).classList

  if( ! event.target.validity.valid ) {
    emailContainerClasses.add( 'has-error' )
    helpClasses.remove( 'hidden' )
  } else {
    emailContainerClasses.remove( 'has-error' )
    helpClasses.add( 'hidden' )
  }
}, false )
