'use strict';

module.exports = {
  up: ( queryInterface, Sequelize ) => {
    queryInterface.addColumn( 'Users', 'email_verified', Sequelize.BOOLEAN )
  },

  down: ( queryInterface, Sequelize ) => {
    queryInterface.removeColumn( 'Users', 'email_verified' )
  }
};
