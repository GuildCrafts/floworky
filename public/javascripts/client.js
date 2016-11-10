$(document).ready( () => {
  const modal = document.querySelector('.modal')
  const openModal = document.querySelector('.dropdown__item--export-link')
  const buttonFormattedText = document.getElementById('formatted-text-preview')
  const buttonPlainText = document.getElementById('plain-text-preview')
  const closeModal = document.querySelector('.preview-window__close-link')

  openModal.onclick = e => {
    modal.style.display = 'block'
    e.preventDefault()
  }

  closeModal.onclick = e => {
    modal.style.display = 'none'
    e.preventDefault()
  }

  buttonPlainText.onclick = e => {
    $( '#preview-text-text.item-page.text__tree.hidden' )
      .toggle( 'hidden' ).focus()
    e.preventDefault()
  }

  buttonFormattedText.onclick = e => {
    $( '#preview-text.item-page.html__tree.show' ).toggle('show').focus()
    e.preventDefault()
  }


})
