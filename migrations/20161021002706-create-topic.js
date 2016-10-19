'use strict';


module.exports = {
  up: function(queryInterface, Sequelize) {

    const createUserTopicTable = () => {
      return queryInterface.createTable('UserTopic', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        UserId: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        TopicId: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        viewed: {
          defaultValue: false,
          allowNull: false,
          type: Sequelize.BOOLEAN,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }).then(() => {
        return queryInterface.addIndex(
          'UserTopic',
          ['UserId', 'TopicId'],
          {
            indexName: 'UserTopicUniqueIndex',
            indicesType: 'UNIQUE'
          }
        )
      })
    }


    const createTopicsTable = () => {
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
      })
    }

    return Promise.all([
      createTopicsTable(),
      createUserTopicTable(),
    ])
  },
  down: function(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.dropTable('Topics'),
      queryInterface.dropTable('UserTopic'),
    ])
  }
};
