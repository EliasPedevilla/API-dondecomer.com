'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      name: 'product 1',
      description: 'description 1',
      available: true,
      price: 23,
      categoryId: 1,
      storeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products')
  }
};
