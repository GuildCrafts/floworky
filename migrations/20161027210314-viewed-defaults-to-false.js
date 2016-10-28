'use strict';

        // add all topics to topics table
        
module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.sequelize.query( 
      'UPDATE "UserTopics" SET viewed=false WHERE viewed IS NULL',
      { type: Sequelize.QueryTypes.UPDATE }
    )
    .then( result => 
      queryInterface.changeColumn( 'UserTopics', 'viewed', { 
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false 
      })
    )
  },

  down: function (queryInterface, Sequelize) {
  }
};
