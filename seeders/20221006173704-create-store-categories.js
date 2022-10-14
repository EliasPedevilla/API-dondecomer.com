'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('StoreCategories', [{
      name: 'Restaurante',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Confiteria',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Bar',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StoreCategories')
    await queryInterface.dropTable('sequelizemeta')
  }
};
