const encryptPassword = require( '../../auth/encryptPassword' )
const RegistrationEmail = require( '../../src/mail/registration_email' )

const register = ( User, email, password ) => {
  return User.create({ email, password: encryptPassword( password ) })
    .then( user => RegistrationEmail.send( user ) )
}

module.exports = register
