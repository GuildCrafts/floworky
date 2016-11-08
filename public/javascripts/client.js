$(document).ready(function(){
  var modal = document.querySelector('.modal')
  var exportLink = document.querySelector('.export-link')

  exportLink.onclick = function(e) {
    modal.style.display = 'block'

    var elHtml = document.querySelector('.item-page').innerHTML;
    var mimeType = 'text/plain';
    var exportLink = document.querySelector('.export-link');

    link.setAttribute('download', 'logFile');
    link.setAttribute('href', 'data:' + mimeType  +  ';charset=utf-8,' + encodeURIComponent(elHtml));
    
    e.preventDefault()
  }

  var closeLink = document.querySelector('.close-link')

  closeLink.onclick = function(e) {
    modal.style.display = 'none'
    e.preventDefault()
  }
})
