"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn(
      "produtos",
      "tempoPreparo",
      "tempo_preparo"
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn(
      "produtos",
      "tempo_preparo",
      "tempoPreparo"
    );
  },
};
