"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class armazem extends Model {
    static associate(models) {}
  }
  armazem.init(
    {
      morada: DataTypes.STRING,
      nome: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "armazem",
    }
  );
  return armazem;
};
