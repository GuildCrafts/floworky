'use strict'

const { Item } = require('../database/models')

module.exports = {
  up: ( migration, DataTypes ) => 
    migration.createTable( Item.tableName, Item.attributes ),
  down: ( migration, DataTypes ) => 
    migration.dropTable ( Item.tableName )
}
