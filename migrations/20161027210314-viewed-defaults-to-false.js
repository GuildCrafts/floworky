'use strict';

        // add all topics to topics table
        
module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.sequelize.query( 
      'UPDATE "UserTopics" SET viewed=false WHERE viewed IS NULL',
      { type: Sequelize.QueryTypes.UPDATE }
    )
    .then( result => 
      queryInterface.sequelize.query(


        // for all users that have no topics (entries in usertopics)
        // insert all topics into UserTopics

        // cross join w topics.... SELECT user_id FROM UserTopics WHERE id NOT IN (SELECT id FROM Users)
      )
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
