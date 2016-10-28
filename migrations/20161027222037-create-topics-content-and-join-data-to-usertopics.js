'use strict';

const INSERT = `
  INSERT INTO "Topics" ( title, url, "createdAt", "updatedAt" ) VALUES 
  ( 'Getting Started', 'https://www.youtube.com/watch?v=SOPYrxvojVo', now(), now() ),
  ( 'Tagging', 'https://www.youtube.com/watch?v=8anT7484ht8', now(), now() ),
  ( 'Moving', 'https://www.youtube.com/watch?v=o8fgVxXIFys', now(), now() )
`

const INSERT_USER_TOPICS = `
  INSERT INTO "UserTopics" ( user_id, topic_id, "createdAt", "updatedAt" )
    SELECT u.id, t.id, now(), now() FROM "Topics" AS t
    CROSS JOIN "Users" AS u
    LEFT JOIN "UserTopics" AS ut ON ut.user_id = u.id AND ut.topic_id = t.id
    WHERE ut.topic_id IS null
`

const DELETE_USER_TOPICS = `
  DELETE FROM "UserTopics" WHERE id IN (
    SELECT ut.id AS ut_id FROM "Topics" AS t
    CROSS JOIN "Users" AS u
    LEFT JOIN "UserTopics" AS ut ON ut.user_id = u.id AND ut.topic_id = t.id
    WHERE t.title='Getting Started' OR t.title='Tagging' OR t.title='Moving' 
  )
`

const DELETE =
  `DELETE FROM "Topics" WHERE title IN ('Getting Started', 'Tagging', 'Moving')`

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.sequelize.query( INSERT )
      .then( result => queryInterface.sequelize.query( INSERT_USER_TOPICS ))
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.sequelize.query( DELETE_USER_TOPICS )
      .then( result => queryInterface.sequelize.query( DELETE ))
  }
};

