"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tipopagamentos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      descricao: {
        type: Sequelize.STRING,
      },
      condicoespagamento: {
        type: Sequelize.STRING,
      },
      tipo: {
        type: Sequelize.STRING,
      },
      prazopagamento: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("tipopagamentos");
  },
};
