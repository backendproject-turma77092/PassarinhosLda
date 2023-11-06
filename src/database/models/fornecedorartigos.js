"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class fornecedorartigos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  fornecedorartigos.init(
    {
      fornecedorId: DataTypes.INTEGER,
      artigoId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "fornecedorartigos",
    }
  );
  return fornecedorartigos;
};
