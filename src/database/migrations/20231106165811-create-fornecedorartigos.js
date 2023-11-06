module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("fornecedorartigos", {
      fornecedorId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      artigoId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("fornecedorartigos");
  },
};
