"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        username: "roy",
        password: "test123",
        email: "royhugo@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "percy",
        password: "123percobaan",
        email: "percy@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "admin",
        password: "admin123",
        email: "admin@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
