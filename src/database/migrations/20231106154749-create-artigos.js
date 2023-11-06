"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("artigos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
      },
      codigo: {
        type: Sequelize.INTEGER,
      },
      numeroserie: {
        type: Sequelize.INTEGER,
      },
      tipo: {
        type: Sequelize.STRING,
      },
      preco: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        type: "TIMESTAMP",
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
        type: "TIMESTAMP",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("artigos");
  },
};
