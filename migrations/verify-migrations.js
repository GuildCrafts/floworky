'use strict'

const { VerificationCode } = require('../database/models')

module.exports = {
  up: ( migration, DataTypes ) => 
    migration.createTable( VerificationCode.tableName, VerificationCode.attributes ),
  down: ( migration, DataTypes ) => 
    migration.dropTable ( VerificationCode.tableName )
}
