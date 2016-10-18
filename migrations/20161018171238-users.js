'use strict';

module.exports = {
  up: ( queryInterface, Sequelize ) => {
    queryInterface.createTable( 'user', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: Sequelize.STRING,
      password: Sequelize.STRING
    })
  },

  down: ( queryInterface, Sequelize ) => {
    queryInterface.dropTable( 'user' )
  }
};
