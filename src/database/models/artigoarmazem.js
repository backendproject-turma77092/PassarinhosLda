"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ArtigoArmazem extends Model {
    static associate(models) {
      this.belongsTo(models.artigos, { foreignKey: "artigoId", as: "artigos" });
      this.belongsTo(models.Armazem, {
        foreignKey: "armazemId",
        as: "Armazem",
      });
    }
  }
  ArtigoArmazem.init(
    {
      artigoId: DataTypes.INTEGER,
      armazemId: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ArtigoArmazem",
      tableName: "artigoarmazem",
      freezeTableName: true,
    }
  );

  return ArtigoArmazem;
};
