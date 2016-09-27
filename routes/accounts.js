const express = require( 'express' )

const encryptPassword = require( '../auth/encryptPassword' )
const passport = require( '../auth/passport' )

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
    .then( user => {
      request.login( user, ( error ) => {
        if( error ) {
          return next( error )
        }

        return response.redirect( '/items' )
      })
    })
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
