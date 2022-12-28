"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("DataUsers", [
      {
        id_user: 1,
        umur: 21,
        berat_badan: 81,
        tinggi_badan: 172,
        jk: "Laki - Laki",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_user: 2,
        umur: 30,
        berat_badan: 70,
        tinggi_badan: 180,
        jk: "Laki - Laki",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("DataUsers", null, {});
  },
};
