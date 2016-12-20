'use strict';


module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn( 'Items', 'is_deleted', { type: Sequelize.BOOLEAN, defaultValue: false, allowNull: false } )
  },
  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn( 'Items', 'is_deleted')
  }
};
