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
      Candidates.belongsTo(models.states, {
        through: "stateCandidate",
        foreignKey: "state_id",
      });
      Candidates.belongsTo(models.elections, {
        through: "candidateElection",
        foreignKey: "election_id",
      });

    }
  }
  Candidates.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        
      },
      state_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      election_id: {
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
      photo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      underscored: true,
      modelName: "candidates",
    }
  );
  return Candidates;
};
