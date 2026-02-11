'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produtos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      preco: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      categoria: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      tempoPreparo: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('produtos');
  }
};
