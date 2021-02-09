"use strict";

const { UUIDV4 } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("States", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: UUIDV4,

      },
      election_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Elections",
          key: "id",
        },
      },
      name: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      date_created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),

      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),

      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("States");
  },
};
