"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn("servicos", "numeroMesa", "numero_mesa");
    await queryInterface.renameColumn("servicos", "valorTotal", "valor_total");
    await queryInterface.renameColumn("servicos", "tempoInicioPreparo", "tempo_inicio_preparo");
    await queryInterface.renameColumn("servicos", "tempoFimPreparo", "tempo_fim_preparo");
    await queryInterface.renameColumn("servicos", "usuarioId", "usuario_id");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn("servicos", "numero_Mesa", "numeroMesa");
    await queryInterface.renameColumn("servicos", "valor_total", "valorTotal");
    await queryInterface.renameColumn("servicos", "tempo_inicio_preparo", "tempoInicioPreparo");
    await queryInterface.renameColumn("servicos", "tempo_fim_preparo", "tempoFimPreparo");
    await queryInterface.renameColumn("servicos", "usuario_id", "usuarioId");
  },
};
