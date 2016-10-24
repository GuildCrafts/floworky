const token = require( 'jsonwebtoken' )
require( 'dotenv' ).config()

module.exports = ( request, response, next ) => {
  const authToken = request.body.token || request.query.token || request.headers.authorization || request.headers( 'x-access-token' )

  if ( authToken ) {
    token.verify(token, process.env.SUPERSECRET, ( error, decoded ) => {
      if ( error ) {
        return response.status( 401 ).json( { success: false })
      } else {
        request.decoded = decoded
        next()
      }
    })
  } else {
    return response.status( 403 ).send({ success: false })
  }
}
