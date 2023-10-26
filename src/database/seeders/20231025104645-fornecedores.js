"use strict";
const { Factory } = require("@faker-js/faker");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const fakeData = [];

    for (let i = 0; i < 10; i++) {
      const nif = generateRandomNIF();
      const morada = generateRandomAddress();
      const userTypeId = Math.ceil(Math.random() * 10);
      const telefone = generateRandomPhoneNumber();
      const localidade = generateRandomCity();
      const codigo_postal = generateRandomZipCode();

      fakeData.push({
        nif,
        morada,
        userTypeId,
        telefone,
        localidade,
        codigo_postal,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert("fornecedores", fakeData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("fornecedores", null, {});
  },
};

function generateRandomNIF() {
  return Math.floor(Math.random() * 900000000) + 100000000; // Gera um NIF fictício
}

function generateRandomAddress() {
  // Gere um endereço fictício manualmente
  return "123 Main Street";
}

function generateRandomCity() {
  // Gere uma cidade fictícia manualmente
  return "Faketown";
}

function generateRandomZipCode() {
  // Gere um código postal fictício manualmente
  return "12345";
}
function generateRandomPhoneNumber() {
  const digits = Math.floor(Math.random() * 900000000) + 100000000; // Gera 8 dígitos aleatórios
  const formattedPhoneNumber = `+1 (555) ${digits
    .toString()
    .slice(0, 3)}-${digits.toString().slice(3, 6)}`;

  return formattedPhoneNumber;
}
