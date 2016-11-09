$(document).ready(function(){
  const modal = document.querySelector('.modal')
  const exportLink = document.querySelector('.dropdown__item--export-link')
  const buttonFormattedText = document.getElementById('formatted-preview')
  const buttonPlainText = document.getElementById('plain-text-preview')
  const downloadLink = document.querySelector('.download-link')
  const elHtml = document.querySelector('.item-page')
  const previewText = document.querySelector('preview-text')

  buttonPlainText.click(function(){
    var now = new Date().toString();
    this.href = "data:text/plain;charset=UTF-8,"  + encodeURIComponent(now);
});

  exportLink.onclick = e => {
    modal.style.display = 'block'
    // const mimeType = 'text/plain'
    const exportLink = document.querySelector('.dropdown__item--export-link')
    e.preventDefault()
  }



  const closeLink = document.querySelector('.preview-window__close-link')

  closeLink.onclick = e => {
    modal.style.display = 'none'
    e.preventDefault()
  }

  // downloadLink.onclick = (e) => {
  //   downloadInnerHTML = (filename, elId, mimeType) => {
  //     mimeType = mimeType || 'text/plain'

  //     link.setAttribute('download', filename)
  //     link.setAttribute('href', 'data:' +  mimeType + ';charset=utf-8' + encodeURIComponent(elHtml))
  //   }
  // }

})
