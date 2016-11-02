const encryptPassword = require( '../../auth/encryptPassword' )
const RegistrationEmail = require( '../../src/mail/registration_email' )
const { createRootItem } = require( '../items/item_response')

const register = ( User, Item, email, password ) =>
  User.create({ email, password: encryptPassword( password ) })
    .then( createRootItem(Item) )
    .then( user => RegistrationEmail.send( user ) )


module.exports = register
