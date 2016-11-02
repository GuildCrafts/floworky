const forms = document.getElementsByTagName( 'form' )

for( let i = 0; i < forms.length; i++ ) {
  forms[ i ].addEventListener( 'invalid', event => {
    event.preventDefault()
  }, true )
}

document.getElementById( 'email' ).addEventListener( 'change', event => {
  const emailContainerClasses = document.querySelector( '.form__email-container' ).classList
  const helpClasses = document.querySelector( '.form__email-container .form__help-block' ).classList

  if( ! event.target.validity.valid ) {
    emailContainerClasses.add( 'form__helpblock--has-error' )
    helpClasses.remove( 'form__help-block--hidden' )
  } else {
    emailContainerClasses.remove( 'form__help-block--has-error' )
    helpClasses.add( 'form__help-block--hidden' )
  }
}, false )
