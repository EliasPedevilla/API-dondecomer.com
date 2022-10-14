'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductCategories', [{
      name: 'Hamburguesas',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Empanadas',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Minutas',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductCategories')
  }
};

