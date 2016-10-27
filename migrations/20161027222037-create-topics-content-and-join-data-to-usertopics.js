'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.bulkInsert( 'Topics', [
      {title: 'Getting Started', url: 'https://www.youtube.com/watch?v=SOPYrxvojVo', createdAt: Sequelize.DATE, updatedAt: Sequelize.DATE},
      {title: 'Tagging', url: 'https://www.youtube.com/watch?v=8anT7484ht8', createdAt: Sequelize.DATE, updatedAt: Sequelize.DATE},
      {title: 'Moving', url: 'https://www.youtube.com/watch?v=o8fgVxXIFys', createdAt: Sequelize.DATE, updatedAt: Sequelize.DATE}
    ])
    .then( result => 
      queryInterface.sequelize.query(
        // for all users that have no topics (entries in usertopics)
        // insert all topics into UserTopics

        // cross join w topics.... SELECT user_id FROM UserTopics WHERE id NOT IN (SELECT id FROM Users)
      )
    )
  },

  down: function (queryInterface, Sequelize) {
  }
};

