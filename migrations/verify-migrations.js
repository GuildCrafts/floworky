'use strict'

const { VerificationCode }  = require('../database/models')

module.exports = {
  up: ( migration, DataTypes ) => {
    return migration.createTable( VerificationCode.tableName, VerificationCode.attributes )
  },
  down: ( migration, DataTypes ) => {
    return migration.dropTable ( VerificationCode.tableName )
  }
}
