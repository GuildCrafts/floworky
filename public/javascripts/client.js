$(document).ready( () => {
  const modal = document.querySelector( '.modal' )
  const openModal = document.querySelector( '.dropdown__item--export-link' )
  const closeModal = document.querySelector( '.preview-window--footer__close-link' )
  const buttonPlainText = document.getElementById( 'plain-text-preview' )
  const buttonFormattedText = document.getElementById( 'formatted-text-preview' )
  const downloadLink = document.getElementById( 'downloadlink' )
  const innerText = $('#preview-text-text').html()

  openModal.onclick = e => {
    e.preventDefault()

    modal.style.display = 'block'
  }

  closeModal.onclick = e => {
    e.preventDefault()

    modal.style.display = 'none'
  }

  buttonPlainText.onclick = e => {
    $( '#preview-text-text.item-page.text__tree.hidden' ).removeClass( 'hidden' ).addClass( 'show' )
    $( '#preview-text.item-page.html__tree.show' ).removeClass( 'show' ).addClass( 'hidden' )
    $( '.plain-text-download' ).removeClass( 'hidden' ).addClass( 'show' )
    $( '.html-text-download' ).removeClass( 'show' ).addClass( 'hidden' )
  }

  buttonFormattedText.onclick = e => {
    $( '#preview-text.item-page.html__tree.hidden' ).removeClass( 'hidden' ).addClass( 'show' )
    $( '#preview-text-text.item-page.text__tree.show' ).removeClass( 'show' ).addClass( 'hidden' )
    $( '.html-text-download' ).removeClass( 'hidden' ).addClass( 'show' )
    $( '.plain-text-download' ).removeClass( 'show' ).addClass( 'hidden' )
  }

})
