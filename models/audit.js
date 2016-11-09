'use strict';
module.exports = function(sequelize, DataTypes) {
  var Audit = sequelize.define('Audit', {
    item_id: DataTypes.INTEGER,
    field_name: DataTypes.STRING,
    old_value: DataTypes.STRING,
    new_value: DataTypes.STRING,
    field_type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Audit;
};