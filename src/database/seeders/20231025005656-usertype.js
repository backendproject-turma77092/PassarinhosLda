"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    {
      await queryInterface.bulkInsert(
        "usertypes",
        [
          {
            nome: "Cliente",
            id: 1,
          },
          {
            nome: "Fornecedor",
            id: 2,
          },
          {
            nome: "Plataforma",
            id: 3,
          },
          {
            nome: "Transportadora",
            id: 4,
          },
          {
            nome: "Gestor",
            id: 5,
          },
          {
            nome: "Fiel Armazém",
            id: 6,
          },
        ],
        {}
      );
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("usertypes", null, {});
  },
};
