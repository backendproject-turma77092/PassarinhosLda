"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tipopagamento extends Model {
    static associate(models) {}
  }
  tipopagamento.init(
    {
      descricao: DataTypes.STRING,
      condicoespagamento: DataTypes.STRING,
      tipo: DataTypes.STRING,
      prazopagamento: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tipopagamento",
    }
  );
  return tipopagamento;
};
