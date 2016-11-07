'use strict';

const INSERT_ROOT_ITEM_SQL =
  `INSERT INTO "Items" ( title, description, parent_id, is_root, user_id,  "createdAt", "updatedAt" )
  SELECT 'Home', 'Welcome to Floworky', 0, true,
  (
    SELECT u.id FROM "Users" AS u
    WHERE u.id NOT IN
    (
      SELECT u.id FROM "Users" AS u
      LEFT JOIN "Items" AS i ON i.user_id = u.id
      WHERE i.parent_id = 0
    )
  ), now(), now()`

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.sequelize.query( INSERT_ROOT_ITEM_SQL )
  },

  down: function (queryInterface, Sequelize) {
    /* No Op, I don't want to delete root items */
  }
};
