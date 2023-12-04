"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Armazem extends Model {
    static associate(models) {
      Armazem.belongsToMany(models.artigos, {
        through: "ArtigoArmazem",
        as: "artigos",
        foreignKey: "armazemId",
        otherKey: "artigoId",
      });
    }
  }
  Armazem.init(
    {
      nome: DataTypes.STRING,
      localizacao: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Armazem",
      tableName: "Armazem",
      freezeTableName: true,
    }
  );
  return Armazem;
};
