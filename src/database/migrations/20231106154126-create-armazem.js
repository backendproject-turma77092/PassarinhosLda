"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("armazems", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
      },
      morada: {
        type: Sequelize.STRING,
      },
      stock: {
        type: Sequelize.STRING,
      },
      pvp1: {
        type: Sequelize.STRING,
      },
      pvp2: {
        type: Sequelize.STRING,
      },
      pcm: {
        type: Sequelize.STRING,
      },
      unidademedidaId: {
        type: Sequelize.INTEGER,
        references: {
          model: "unidademedida",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("armazems");
  },
};
