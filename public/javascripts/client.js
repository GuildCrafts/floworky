$( document ).ready( () => {
  const modal = document.querySelector( '.modal' )

  document.querySelector( '.export-link' ).onclick = event => {
    event.preventDefault()

    modal.style.display = 'block'
  }

  document.querySelector( '.preview-window--footer__close-link' ).onclick = event => {
    event.preventDefault()

    modal.style.display = 'none'
  }

  document.getElementById( 'plain-text-preview' ).onclick = event => {
    $( '#preview-text-text.item-page.text__tree.hidden' ).removeClass( 'hidden' ).addClass( 'show' )
    $( '#preview-text.item-page.html__tree.show' ).removeClass( 'show' ).addClass( 'hidden' )
    $( '.plain-text-download' ).removeClass( 'hidden' ).addClass( 'show' )
    $( '.html-text-download' ).removeClass( 'show' ).addClass( 'hidden' )
  }

  document.getElementById( 'formatted-text-preview' ).onclick = event => {
    $( '#preview-text.item-page.html__tree.hidden' ).removeClass( 'hidden' ).addClass( 'show' )
    $( '#preview-text-text.item-page.text__tree.show' ).removeClass( 'show' ).addClass( 'hidden' )
    $( '.html-text-download' ).removeClass( 'hidden' ).addClass( 'show' )
    $( '.plain-text-download' ).removeClass( 'show' ).addClass( 'hidden' )
  }
})
