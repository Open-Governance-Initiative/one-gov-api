"use strict";
const { Model, UUIDV4 } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Candidates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Candidates.hasMany(models.Vote);
    }
  }
  Candidates.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
      },
      state_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bio: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cv: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      election_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Candidates",
    }
  );
  return Candidates;
};
