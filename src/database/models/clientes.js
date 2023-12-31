"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class clientes extends Model {
    static associate(models) {
      clientes.belongsTo(models.usertype, {
        foreignKey: "userTypeId",
        as: "usertype",
      });

      clientes.belongsTo(models.tipopagamento, {
        foreignKey: "tipopagamentoId",
        as: "tipopagamento",
      });
      clientes.belongsTo(models.status, {
        foreignKey: "statusId",
        as: "statuses",
      });
      clientes.hasMany(models.Encomenda, {
        foreignKey: "clienteId",
        as: "encomendas",
      });
    }
  }
  clientes.init(
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
      tipopagamentoId: DataTypes.INTEGER,
      statusId: DataTypes.INTEGER,
      tokenIdentifier: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "clientes",
    }
  );
  return clientes;
};
