"use strict";

const { UUIDV4 } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Votes", {
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
          model: "Candidates",
          key: "id",
        },
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      election_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Elections",
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
    await queryInterface.dropTable("Votes");
  },
};
