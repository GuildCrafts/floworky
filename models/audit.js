'use strict';
module.exports = function(sequelize, DataTypes) {
  var Audit = sequelize.define('Audit', {
    table_name: DataTypes.STRING,
    element_id: DataTypes.INTEGER,
    element_name: DataTypes.STRING,
    old_value: DataTypes.STRING,
    new_value: DataTypes.STRING,
    field_type: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Audit;
};