'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable( 'session',  {
      sid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      sess: {
        allowNull: false,
        type: Sequelize.JSON
      },
      expire: {
        allowNull: false,
        type: Sequelize.DATE(6)
      }
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable( 'session' )
  }
};
