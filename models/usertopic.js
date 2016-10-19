'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserTopic = sequelize.define('UserTopic', {
    user_id: DataTypes.INTEGER,
    topic_id: DataTypes.INTEGER,
    viewed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return UserTopic;
};