const token = require( 'jsonwebtoken' )

const authenticate = user => {
  return new Promise ( (resolve, reject) => {
    token.sign( { user }, process.env.SUPERSECRET, { expiresIn: '7d' }, ( error, authToken ) => {
      if( error ) {
        reject( error )
      } else {
        resolve( authToken )
      }
    })
  })
}

module.exports = authenticate
