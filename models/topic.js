'use strict';
module.exports = function(sequelize, DataTypes) {
  var Topic = sequelize.define('Topic', {
    title: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.Topic.belongsToMany( models.User, {
          through: models.UserTopic,
          foreignKey: 'topic_id',
          otherKey: 'user_id'
        })
      }
    }
  });
  return Topic;
};
