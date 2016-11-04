'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Audits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      table_name: {
        type: Sequelize.STRING
      },
      element_id: {
        type: Sequelize.INTEGER
      },
      element_name: {
        type: Sequelize.STRING
      },
      old_value: {
        type: Sequelize.STRING
      },
      new_value: {
        type: Sequelize.STRING
      },
      field_type: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Audits');
  }
};