"use strict";
const { Model, UUIDV4 } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vote.belongsToMany(models.elections, {
        through: "votes_elections",
        foreignKey: "election_id",
      });
      Vote.belongsToMany(models.users, {
        through: "votes_users",
        foreignKey: "user_id",
      });
      Vote.belongsTo(models.candidates, {
        foreignKey: "candidate_id",
      });
    }
  }
  Vote.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      candidate_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      election_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      ip_address: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      sequelize,
      underscored: true,
      modelName: "votes",
    }
  );
  return Vote;
};
