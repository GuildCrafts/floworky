const token = require( 'jsonwebtoken' )
const bcrypt = require( 'bcrypt' )
require( 'dotenv' ).config()

const encryptPassword = require( '../../auth/encryptPassword' )
const RegistrationEmail = require( '../../src/mail/registration_email' )

const register = ( request, response ) => {
  const { User } = request.app.get( 'models' )
  const { email, password } = request.body

  User.create({ email, password: encryptPassword( password ) })
    .then( user => RegistrationEmail.send( user ) )
    .then( user => response )
    .catch( error => response.status( 401 ).json( { error, success: false } ) )
}

module.exports = { register }
