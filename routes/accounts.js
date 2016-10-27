const express = require( 'express' )
const router = express.Router()

const passport = require( '../auth/passport' )
const register = require( './accounts/register' )
const { testForCode, whereClause } = require( './accounts/verify_user' )


const AUTH_OPTIONS = {
  successRedirect: '/items',
  failureRedirect: '/accounts/login'
}

router.get( '/register', ( request, response ) => {
  response.render( 'accounts/register' )
})

router.post( '/register', ( request, response ) => {
  const { User } = request.app.get( 'models' )
  const { email, password } =request.body

  register( User, email, password )
    .then( user => response.redirect( '/accounts/verify' ))
})

router.get( '/verify', (request, response ) => {
  response.render( 'accounts/verify' )
})

router.get( '/verify/:hash', ( request, response, next ) => {
  const { User, VerificationCode } = request.app.get( 'models' )
  const { hash } = request.params

  VerificationCode.findOne( whereClause( hash ))
    .then( testForCode )
    .then( result => User.update(
      { email_verified: true },
      { returning: true, where: { id: result.user_id }})
    )
    .then( result => {
      const [ count, rows ] = result
      const { id } = rows[ 0 ]

      request.login( { id }, error => {
        if( error ) {
          return next( error )
        }

        return response.redirect( '/items' )
      })
    })
    .catch( error => response.render( 'accounts/verify' ))
})

router.get( '/login', ( request, response ) => {
  response.render( 'accounts/login' )
})

router.post( '/login', passport.authenticate( 'local', AUTH_OPTIONS ))

router.get( '/logout', ( request, response ) => {
  request.logout()
  response.redirect( '/' )
})

module.exports = router
