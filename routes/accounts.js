const express = require( 'express' )

const encryptPassword = require( '../auth/encryptPassword' )
const passport = require( '../auth/passport' )
const RegistrationEmail = require( '../src/mail/registration_email.js' )

const { testForCode, whereClause } = require( './accounts/verify_user' )

const router = express.Router()

const AUTH_OPTIONS = {
  successRedirect: '/items',
  failureRedirect: '/accounts/login'
}

router.get( '/register', ( request, response ) => {
  response.render( 'accounts/register' )
})

router.post( '/register', ( request, response , next) => {
  const User = request.app.get( 'models' ).User

  const { email, password } = request.body

  User.create({ email, password: encryptPassword( password ) })
    .then( user => RegistrationEmail.send( user ))
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
