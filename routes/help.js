const express = require( 'express' )
const router = express.Router()

router.get('/', ( request, response ) => {
  response.render( 'help/index' )
})
router.get('/howtos', ( request, response ) => {
  const data = [
    { id: 1, title: 'Number 1', content: 'Content for 1', url: 'https://www.youtube.com/embed/rPVk-QbyP6s' },
    { id: 2, title: 'Number 2', content: 'Content for 2', url: 'https://www.youtube.com/embed/rPVk-QbyP6s' },
    { id: 3, title: 'Number 3', content: 'Content for 3', url: 'https://www.youtube.com/embed/rPVk-QbyP6s' },
    { id: 4, title: 'Number 4', content: 'Content for 4', url: 'https://www.youtube.com/embed/rPVk-QbyP6s' },
    { id: 5, title: 'Number 5', content: 'Content for 5', url: 'https://www.youtube.com/embed/rPVk-QbyP6s' },
    { id: 6, title: 'Number 6', content: 'Content for 6', url: 'https://www.youtube.com/embed/rPVk-QbyP6s' },
    { id: 7, title: 'Number 7', content: 'Content for 7', url: 'https://www.youtube.com/embed/rPVk-QbyP6s' },
    { id: 8, title: 'Number 8', content: 'Content for 8', url: 'https://www.youtube.com/embed/rPVk-QbyP6s' },
  ]

  response.render( 'help/howtos', { topics: data } )
})
router.get('/commands', ( request, response ) => {
  response.render( 'help/commands' )
})
router.get('/support', ( request, response ) => {
  response.render( 'help/support' )
})

module.exports = router
