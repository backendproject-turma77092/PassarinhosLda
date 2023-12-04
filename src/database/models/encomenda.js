"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Encomenda extends Model {
    static associate(models) {
      Encomenda.belongsTo(models.clientes, {
        foreignKey: "clienteId",
        as: "clientes",
      });
      Encomenda.belongsToMany(models.artigos, {
        through: "EncomendaArtigos",
        as: "artigos",
        foreignKey: "encomendaId",
        otherKey: "artigoId",
      });
      Encomenda.belongsTo(models.transportadora, {
        foreignKey: "transportadoraId",
        as: "transportadora",
      });
    }
  }
  Encomenda.init(
    {
      clienteId: DataTypes.INTEGER,
      dataEncomenda: DataTypes.DATE,
      status: DataTypes.STRING,
      total: DataTypes.DECIMAL(10, 2),
      dataEntrega: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Encomenda",
    }
  );
  return Encomenda;
};
