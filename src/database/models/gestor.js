"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class gestor extends Model {
    static associate(models) {
      gestor.belongsTo(models.usertype, {
        foreignKey: "userTypeId",
        as: "usertype",
      });
    }
  }
  gestor.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.INTEGER,
      morada: DataTypes.STRING,
      email: DataTypes.STRING,
      nif: DataTypes.INTEGER,
      telefone: DataTypes.INTEGER,
      localidade: DataTypes.STRING,
      codigoPostal: DataTypes.INTEGER,
      userTypeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "gestor",
    }
  );
  return gestor;
};
