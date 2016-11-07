$(document).ready(function(){
  const modal = document.querySelector('.modal')
  const exportLink = document.querySelector('.export-link')
  const radioButtonFormattedText = document.querySelector('.formatted-preview')
  const radioButtonPlainText = document.querySelector('.plain-text-preview')
  const downloadLink = document.querySelector('.download-link')
  const elHtml = document.querySelector('.item-page').innerHTML

  exportLink.onclick = (e) => {
    modal.style.display = 'block'

    // const mimeType = 'text/plain'
    const exportLink = document.querySelector('.export-link')
    e.preventDefault()

  }

  const closeLink = document.querySelector('.close-link')

  closeLink.onclick = (e) => {
    modal.style.display = 'none'
    e.preventDefault()
  }

  downloadLink.onclick = (e) => {
    downloadInnerHTML = (filename, elId, mimeType) => {
      mimeType = mimeType || 'text/plain'

      link.setAttribute('download', filename)
      link.setAttribute('href', 'data:' +  mimeType + ';charset=utf-8' + encodeURIComponent(elHtml))
    }
  }

})
