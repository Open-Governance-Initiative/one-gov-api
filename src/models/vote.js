"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vote.belongsToMany(models.Election);
      Vote.belongsToMany(models.Users);
      Vote.belongsTo(models.Candidates);
    }
  }
  Vote.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: UUIDV4,
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
    },
    {
      sequelize,
      modelName: "Vote",
    }
  );
  return Vote;
};
