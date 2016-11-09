$(document).ready( () => {
  const modal = document.querySelector('.modal')
  const exportLink = document.querySelector('.dropdown__item--export-link')
  const buttonFormattedText = document.getElementById('formatted-text-preview')
  const buttonPlainText = document.getElementById('plain-text-preview')
  const downloadLink = document.querySelector('.download-link')
  const redlink = document.querySelector('.change-text-to-red')
  const previewText = document.querySelector('#preview-text')
  const closeLink = document.querySelector('.preview-window__close-link')

  exportLink.onclick = e => {
    modal.style.display = 'block'
    $("#preview-text").replaceWith($( "#preview-text.item-page.html__tree" ).text())
    e.preventDefault()
  }

  buttonPlainText.onclick = e => {

    $( '#preview-text-text.item-page.text__tree.hidden' )
      .toggle( 'hidden' )

    e.preventDefault()
  }

  buttonFormattedText.onclick = e => {

    $( '#preview-text.item-page.html__tree.show' ).toggle('show')

    e.preventDefault()
  }

  closeLink.onclick = e => {
    modal.style.display = 'none'
    e.preventDefault()
  }

})
