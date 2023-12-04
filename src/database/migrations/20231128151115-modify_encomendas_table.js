"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Encomendas", "dataEntrega", {
      type: Sequelize.DATE,
      allowNull: true,
    });

    await queryInterface.changeColumn("Encomendas", "status", {
      type: Sequelize.ENUM("Pendente", "Realizada"),
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remover a coluna dataEntrega
    await queryInterface.removeColumn("Encomendas", "dataEntrega");
  },
};
