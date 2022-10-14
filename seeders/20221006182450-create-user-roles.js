'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('UserRoles',
      [
        {
          name: 'standard',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'pro',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserRoles')
  }
};