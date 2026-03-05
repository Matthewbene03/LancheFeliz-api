"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "produtos",
      "idx_produtos_categoria" // 👈 nome real da constraint aqui
    );

    await queryInterface.changeColumn("produtos", "categoria", {
      type: Sequelize.STRING,
      unique: false,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addConstraint("produtos", {
      fields: ["categoria"],
      type: "unique",
      name: "idx_produtos_categoria",
    });
  },
};
