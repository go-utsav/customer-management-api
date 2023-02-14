'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('customers', [{
      username: 'goutsav',
      email: 'goutsav@gmail.com',
      password: 121212,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'anil',
      email: 'anilvaga@gmail.com',
      password: 131313,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'jitu',
      email: 'jituvaga@gmail.com',
      password: 141414,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('customers', null, {});

  }
};
