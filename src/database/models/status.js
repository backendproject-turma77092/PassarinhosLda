"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    static associate(models) {}
  }
  Status.init(
    {
      nome: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "status",
    }
  );
  return Status;
};
