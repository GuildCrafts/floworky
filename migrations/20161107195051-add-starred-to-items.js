'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn( 'Items', 'starred', { type: Sequelize.BOOLEAN, defaultValue: false } )
  },
  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn( 'Items', 'starred')
  }
};
