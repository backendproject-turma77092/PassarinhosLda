"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class EncomendaArtigos extends Model {
    static associate(models) {
      EncomendaArtigos.belongsTo(models.Encomenda, {
        foreignKey: "encomendaId",
        as: "encomendas",
      });
      this.belongsTo(models.artigos, { foreignKey: "artigoId", as: "artigos" });
    }
  }

  EncomendaArtigos.init(
    {
      encomendaId: DataTypes.INTEGER,
      artigoId: DataTypes.INTEGER,
      quantidade: DataTypes.INTEGER,
      preco: DataTypes.DECIMAL(10, 2),
    },
    {
      sequelize,
      modelName: "EncomendaArtigos",
      tableName: "EncomendaArtigos",
    }
  );

  return EncomendaArtigos;
};
