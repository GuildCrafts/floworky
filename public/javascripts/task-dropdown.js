const taskMenuTriggers = document.querySelectorAll('.item__toggle')

taskMenuTriggers.forEach( trigger => {
  trigger.addEventListener('mouseenter', event => console.log( 'I AM SO TRIGGERED RIGHT NOW!' ))
  trigger.addEventListener('mouseout', event => console.log( 'NEVERMIND. I AM CHILLIN' ))
})

