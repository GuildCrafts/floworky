const express = require( 'express' )
const router = express.Router()

const { register } = require( '../accounts/accounts_route' )

router.post('/register', ( request, response ) => {
  register(
    request,
    response.status( 202 ).json( { message: 'Please check your email' }
  ))
})

module.exports = router
