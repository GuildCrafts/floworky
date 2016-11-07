'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn( 'Users', 'see_report', Sequelize.BOOLEAN )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn( 'Users', 'see_report' )
  }
};
