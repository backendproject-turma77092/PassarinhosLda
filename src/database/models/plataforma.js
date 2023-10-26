"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class plataforma extends Model {
    static associate(models) {
      plataforma.belongsTo(models.usertype, {
        foreignKey: "userTypeId",
        as: "usertype",
      });
    }
  }
  plataforma.init(
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
      modelName: "plataforma",
    }
  );
  return plataforma;
};
