'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('customers', 'profilepic', {
          allowNull: true,
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
      ]);
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('customers');

  }
};
