"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    "statuss",
      [
        {
          nome: "Imcompleta",
          id: 1,
        },
        {
          nome: "Em Preparação",
          id: 2,
        },
        {
          nome: "Completa",
          id: 3,
        },
        {
          nome: "Em Distribuição",
          id: 4,
        },
        {
          nome: "Entregue",
          id: 5,
        },
      ],
      {};
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("statuss", null, {});
  },
};
