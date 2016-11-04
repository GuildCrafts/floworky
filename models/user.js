'use strict';
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    email: DataTypes.STRING,
    email_verified: DataTypes.BOOLEAN,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.User.belongsToMany( models.Topic, {
          through: models.UserTopic,
          foreignKey: 'user_id', 
          otherKey: 'topic_id'
        })
      }
    }
  });
};
