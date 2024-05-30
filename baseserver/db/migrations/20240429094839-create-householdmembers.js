'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('householdmembers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_of_the_family_member: {
        type: Sequelize.STRING
      },
      relationship_with_head: {
        type: Sequelize.STRING
      },
      disability: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      level_of_education: {
        type: Sequelize.STRING
      },
      occupation: {
        type: Sequelize.STRING
      },
      annual_gross_income: {
        type: Sequelize.STRING
      },
      membership: {
        type: Sequelize.STRING
      },
      headId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'generalinfo',
            key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('householdmembers');
  }
};