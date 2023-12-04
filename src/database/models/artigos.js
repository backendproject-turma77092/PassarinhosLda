"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class artigos extends Model {
    static associate(models) {
      artigos.belongsTo(models.fornecedores, {
        foreignKey: "fornecedorId",
        as: "fornecedor",
      });
      artigos.belongsToMany(models.Armazem, {
        through: "ArtigoArmazem",
        as: "armazens",
        foreignKey: "artigoId",
        otherKey: "armazemId",
      });
      artigos.belongsToMany(models.Encomenda, {
        through: "EncomendaArtigos",
        as: "encomendas",
        foreignKey: "artigoId",
        otherKey: "encomendaId",
      });
    }
  }
  artigos.init(
    {
      nome: DataTypes.STRING,
      descricao: DataTypes.TEXT,
      preco: DataTypes.DECIMAL(10, 2),
      fornecedorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "artigos",
    }
  );
  return artigos;
};
