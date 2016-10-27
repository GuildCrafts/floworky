const token = require( 'jsonwebtoken' )

const checkForToken = request => {
  const authToken = request.headers.authorization || request.header( 'x-access-token' )

  return new Promise( (resolve, reject) => {
    if( authToken != undefined ) {
      resolve( authToken )
    } else {
      reject()
    }
  })
}

const verifyToken = authToken => {
  return new Promise ( (resolve, reject) => {
    token.verify( authToken, process.env.SUPERSECRET, (error, decoded) => {
      if( error ) {
        reject( error )
      } else {
        resolve( decoded )
      }
    })
  })
}

const checkToken = ( request, response, next ) => {
  checkForToken( request )
    .then( verifyToken )
    .then( decodedToken => {
      request.decoded = decodedToken
      next()
    })
    .catch( error => response.status( 403 ).send({}) )
}

module.exports = checkToken
