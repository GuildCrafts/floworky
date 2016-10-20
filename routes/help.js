const express = require( 'express' )
const router = express.Router()

router.get('/', ( request, response ) => {

  response.redirect( 'help/howtos' )
})

router.get('/howtos', ( request, response ) => {
  // Help.findAll()
  // .then ( redirect(view,  { info from findAll}))
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

  const userTopics = [
    { user_id: 1, topic_id: 2, viewed: true },
    { user_id: 4, topic_id: 1, viewed: true },
    { user_id: 2, topic_id: 3, viewed: true },
    { user_id: 3, topic_id: 4, viewed: true },
    { user_id: 5, topic_id: 1, viewed: true },
    { user_id: 6, topic_id: 2, viewed: true },
    { user_id: 7, topic_id: 3, viewed: true },
    { user_id: 4, topic_id: 4, viewed: true },
    { user_id: 4, topic_id: 6, viewed: true },
    { user_id: 4, topic_id: 6, viewed: true },
  ]
  response.render( 'help/howtos', { topics: data } )
})


router.get('/commands', ( request, response ) => {
  const data = [
    { id: 1, title: 'Command + 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 2, title: 'Command + 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 2, title: 'Command + 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 2, title: 'Command + 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 3, title: 'Command + 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 4, title: 'Command + 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 5, title: 'Command + 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 6, title: 'Command + 6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 7, title: 'Command + 7', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 8, title: 'Command + 8', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  ]

  response.render( 'help/commands', { commands: data } )
})

router.get('/support', ( request, response ) => {
  response.render( 'help/support' )
})

module.exports = router
