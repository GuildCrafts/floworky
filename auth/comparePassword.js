const bcrypt = require( 'bcrypt' )

const findUser = ( User, email, password ) => {
  return User.findOne({ where: { email, email_verified: true }})
    .then( user =>
      new Promise( (resolve, reject) => {
        if( ! user ) {
          reject({})
        }
        bcrypt.compare( password, user.password, (error, result ) => {
          if( result ) {
            resolve( user )
          } else {
            reject( error )
          }
        })
      })
    )
}

module.exports = findUser
