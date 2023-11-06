"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    "pagamentoss",
      [
        {
          nome: "PayPal",
          id: 1,
        },
        {
          nome: "MBWAY",
          id: 2,
        },
        {
          nome: "Multibanco",
          id: 3,
        },
        {
          nome: "Transfêrencia Bancária",
          id: 4,
        },
        {
          nome: "Contra Rembolso",
          id: 5,
        },
      ],
      {};
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("pagamentoss", null, {});
  },
};
