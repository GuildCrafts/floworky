'use strict';
module.exports = function(sequelize, DataTypes) {
  var VerificationCode = sequelize.define('VerificationCode', {
    user_id: DataTypes.INTEGER,
    hash: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return VerificationCode;
};