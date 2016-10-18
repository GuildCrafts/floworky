'use strict';

module.exports = {
  up: ( queryInterface, Sequelize ) => {
    queryInterface.createTable( 'verification_code', {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      hash: Sequelize.STRING
    })
  },

  down: ( queryInterface, Sequelize ) => {
    queryInterface.dropTable( 'verification_code' )
  }
};
