'use strict';
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Topic', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    url: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    classMethods: {
      associate: function(models) {
        models.Topic.belongsToMany( models.User, { through: 'UserTopic' } )
      }
    }
  });
};
