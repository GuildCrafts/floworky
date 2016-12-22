const taskMenuTriggers = document.querySelectorAll( '.item__toggle' )

taskMenuTriggers.forEach( trigger => {
  trigger.addEventListener( 'mouseenter', event => {
    event.target.children[ 0 ].style.display = 'block'
  })

  trigger.addEventListener( 'mouseleave', event => {
    event.target.children[ 0 ].style.display = 'none'
  })
})

