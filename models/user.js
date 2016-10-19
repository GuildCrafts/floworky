'use strict';
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    email: DataTypes.STRING,
    email_verified: DataTypes.BOOLEAN,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        console.log(models)
        models.User.hasMany( models.UserTopic )
      }
    }
  });
};
