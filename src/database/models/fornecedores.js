"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class fornecedores extends Model {
    static associate(models) {
      fornecedores.belongsTo(models.usertype, {
        foreignKey: "userTypeId",
        as: "usertype",
      });

      fornecedores.belongsToMany(models.artigos, {
        through: "fornecedorartigo",
        foreignKey: "fornecedorId",
        otherKey: "artigoId",
      });

      fornecedores.belongsTo(models.tipopagamento, {
        foreignKey: "tipopagamentoId",
        as: "tipopagamento",
      });
      fornecedores.belongsTo(models.status, {
        foreignKey: "statusId",
        as: "statuses",
      });
    }
  }
  fornecedores.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.INTEGER,
      email: DataTypes.STRING,
      morada: DataTypes.STRING,
      nif: DataTypes.INTEGER,
      telefone: DataTypes.INTEGER,
      localidade: DataTypes.STRING,
      codigoPostal: DataTypes.INTEGER,
      userTypeId: DataTypes.INTEGER,
      tipopagamentoId: DataTypes.INTEGER,
      statusId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "fornecedores",
    }
  );
  return fornecedores;
};
