"use strict";
const { Model, UUIDV4, DATE } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Election extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Election.hasMany(models.State);
    }
  }
  Election.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      election_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Election",
    }
  );
  return Election;
};
