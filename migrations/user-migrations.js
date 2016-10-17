'use strict'

const { User }  = require('../database/models')

module.exports = {
  up: ( migration, DataTypes ) => migration.createTable( User.tableName, User.attributes ),
  down: ( migration, DataTypes ) => migration.dropTable ( User.tableName )
}
