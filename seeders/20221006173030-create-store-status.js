'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('StoreStatuses', [
      {
        name: 'Abierto',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cerrado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StoreStatuses')
  }
};
