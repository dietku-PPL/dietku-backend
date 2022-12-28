'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("DataDiets", [
      {
        jenis_diet: "Diet Mayo",
        desc_diet: "Diet mayo sebenarnya merupakan diet yang berfokus pada pengubahan gaya hidup menjadi lebih sehat, misalnya konsumsi makanan dengan gizi seimbang serta olahraga yang teratur.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("DataDiets", null, {});
  }
};
