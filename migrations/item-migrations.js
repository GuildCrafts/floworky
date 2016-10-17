'use strict'

const { Item }  = require('../database/models')

module.exports = {
  up: ( migration, DataTypes ) => {
    return migration.createTable( Item.tableName, Item.attributes )
  },
  down: ( migration, DataTypes ) => {
    return migration.dropTable ( Item.tableName )
  }
}
