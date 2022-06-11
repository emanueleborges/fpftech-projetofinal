'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('vendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Cliente_fk: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'clientes', key: 'id' }
      },
      Produto_fk: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'produtos', key: 'id' }
      },
      Quantidade: {
        allowNull: false,
        type: Sequelize.INTEGER, 
        validate: { notNull: true },
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('vendas');
  }
};
