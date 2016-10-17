'use strict'

const { User }  = require('../database/models')

module.exports = {
  up: ( migration, DataTypes ) => {
    return migration.createTable( User.tableName, User.attributes )
  },
  down: ( migration, DataTypes ) => {
    return migration.dropTable ( User.tableName )
  }
}
