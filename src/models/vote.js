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
      Vote.belongsToMany(models.election);
      Vote.belongsToMany(models.users);
      Vote.belongsTo(models.candidates);
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
      underscored: true,
      modelName: "Vote",
    }
  );
  return Vote;
};
