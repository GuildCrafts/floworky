'use strict';

module.exports = {
  up: ( queryInterface, Sequelize ) => {
    queryInterface.addColumn( 'Users', 'email_verified', { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false } )
  },

  down: ( queryInterface, Sequelize ) => {
    queryInterface.removeColumn( 'Users', 'email_verified' )
  }
};
