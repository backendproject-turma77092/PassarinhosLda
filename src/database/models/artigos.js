"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class artigos extends Model {
    static associate(models) {
      artigos.belongsToMany(models.fornecedores, {
        through: "fornecedorartigo",
        foreignKey: "artigoId",
        otherKey: "fornecedorId",
      });
    }
  }
  artigos.init(
    {
      nome: DataTypes.STRING,
      numeroserie: DataTypes.INTEGER,
      tipo: DataTypes.INTEGER,
      preco: DataTypes.INTEGER,
      codigo: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "artigos",
    }
  );
  return artigos;
};
