'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nome: {
        allowNull: false,
        type: Sequelize.STRING(125),
        validate: { isAlpha: true, notNull: true,}, 
        unique: true,
        validate: { notNull: true },
      },
      Preco: {
        allowNull: false,
        type: Sequelize.FLOAT(10,2),
        validate: { notNull: true },
      },
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('produtos');
  }
};
