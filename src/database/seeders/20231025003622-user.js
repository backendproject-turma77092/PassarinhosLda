"use strict";
const bcrypt = require("bcrypt");
const { faker } = require("@faker-js/faker");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    for (let i = 0; i < 10; i++) {
      await queryInterface.bulkInsert(
        "users",
        [
          {
            nome: faker.internet.userName(),
            email: faker.internet.email(),
            password: bcrypt.hashSync("123", 10),
          },
        ],
        {}
      );
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
