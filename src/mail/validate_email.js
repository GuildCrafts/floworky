const checkEmail = require( 'legit')

const validateEmail = email => {
  return new Promise( ( resolve, reject ) => {
    checkEmail( email, ( validation, addresses, error ) => {
      if( validation ) {
        resolve( email )
      } else {
        reject( `User not saved: "${email}" is not a valid email` )
      }
    })
  })
}

module.exports = validateEmail
