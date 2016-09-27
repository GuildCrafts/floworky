const bcrypt = require( 'bcrypt' )

const SALT_ROUNDS = 10

const encryptPassword = password => {
  const salt = bcrypt.genSaltSync( SALT_ROUNDS )

  return bcrypt.hashSync( password, salt )
}

module.exports = encryptPassword
