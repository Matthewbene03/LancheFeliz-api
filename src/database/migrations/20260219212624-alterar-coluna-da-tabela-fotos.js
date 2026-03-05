"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn("fotos", "produtoId", "produto_id");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn("fotos", "produto_id", "produtoId");
  },
};
