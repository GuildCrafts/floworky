const isEmail = require( 'isemail' )

const validateEmail = email => {
  return new Promise ( (resolve, reject ) => {
    if( isEmail.validate( email ) ) {
      resolve( email )
    } else {
      reject( `User not saved: ${'\"' + email + '\"'} is not a valid email.`, email )
    }
  })
}

module.exports = validateEmail
