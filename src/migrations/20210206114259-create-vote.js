"use strict";

const { UUIDV4 } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("votes", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: UUIDV4,
      },
      candidate_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "candidates",
          key: "id",
        },
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      election_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "elections",
          key: "id",
        },
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
    await queryInterface.dropTable("votes");
  },
};
