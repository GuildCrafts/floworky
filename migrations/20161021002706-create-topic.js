
'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable( 'Topics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    { classMethods:
      {
        associate: function(models) {
          Topics.belongsToMany( Users, { through: 'UserTopics' } )
        }
      }
    })
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Topics');
  }
};
