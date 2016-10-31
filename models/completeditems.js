'use strict';
module.exports = function(sequelize, DataTypes) {
  var CompletedItems = sequelize.define('CompletedItems', {
    item_id: DataTypes.INTEGER,
    completedBy: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return CompletedItems;
};