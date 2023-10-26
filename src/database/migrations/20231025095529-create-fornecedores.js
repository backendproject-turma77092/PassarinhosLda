"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("fornecedores", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      morada: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nif: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      telefone: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      localidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      codigoPostal: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      userTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "usertypes",
          key: "id",
        },
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
    await queryInterface.dropTable("fornecedores");
  },
};
