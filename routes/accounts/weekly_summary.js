const express = require( 'express' )
const router = express.Router()


router.get( '/', (request, response ) => {

  response.render('accounts/weekly_report')
})

module.exports = router
