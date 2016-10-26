'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn( 'Items', 'is_root', { type: Sequelize.BOOLEAN, defaultValue: false } )
  },
  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn( 'Items', 'is_root')
  }
};
