'use strict';
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserTopic', {
    UserId: DataTypes.INTEGER,
    TopicId: DataTypes.INTEGER,
    viewed: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    classMethods: {
      associate: function(models) {
        models.UserTopic.belongsTo( models.User )
        models.UserTopic.belongsTo( models.Topic )
      }
    }
  });
};
