const express = require( 'express' )
const router = express.Router()


router.get( '/', (request, response ) => {
  const { Item } = request.app.get( 'models' )
  const { user, query } = request
  Item.findAndCountAll({ where: { user_id : user.id }
  }).then( itemCount => {
      const { count } = itemCount
      response.render( 'accounts/weekly_report', { count } )
     })
})

module.exports = router
