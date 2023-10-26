"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class usertype extends Model {
    static associate(models) {}
  }
  usertype.init(
    {
      nome: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "usertype",
    }
  );
  return usertype;
};
