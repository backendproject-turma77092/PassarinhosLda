"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transportadora extends Model {
    static associate(models) {
      transportadora.belongsTo(models.usertype, {
        foreignKey: "userTypeId",
        as: "usertype",
      });
    }
  }
  transportadora.init(
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
      modelName: "transportadora",
    }
  );
  return transportadora;
};
