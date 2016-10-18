'use strict';

module.exports = {
  up: ( queryInterface, Sequelize ) => {
    queryInterface.addColumn( 'user', 'email_verified',
      {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    ),
  },

  down: ( queryInterface, Sequelize ) => {
    queryInterface.removeColumn( 'user', 'email_verified' )
  }
};
