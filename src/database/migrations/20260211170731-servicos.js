'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('servicos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numeroMesa: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      valorTotal: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      observacao: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tempoInicioPreparo: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      tempoFimPreparo: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id'
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE"
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
    await queryInterface.dropTable('servicos');
  }
};
