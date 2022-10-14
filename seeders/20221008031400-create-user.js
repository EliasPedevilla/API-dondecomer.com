'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Juan',
      lastname: 'Romero',
      email: 'juanromero@gmail.com',
      password: '1234',
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  async down(queryInterface) {
    await queryInterface.dropTable('Users')
  }
};
