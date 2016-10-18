'use strict';

module.exports = {
  up: ( queryInterface, Sequelize ) => {
    queryInterface.createTable( 'item', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: Sequelize.STRING,
      description: Sequelize.TEXT,
      completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      parent_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      user_id: Sequelize.INTEGER
    })
  },

  down: ( queryInterface, Sequelize ) => {
    queryInterface.dropTable( 'items' )
  }
};
