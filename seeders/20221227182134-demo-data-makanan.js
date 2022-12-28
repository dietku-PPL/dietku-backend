"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("DataMakanans", [
      {
        nama_makanan: "rendang",
        url_image: "https://cdns.klimg.com/newshub.id/news/2016/07/06/69928/750x500-ini-jumlah-kalori-pada-makanan-khas-lebaran-160706t.jpg",
        kalori: 195,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_makanan: "rendang",
        url_image: "https://img-global.cpcdn.com/recipes/ff70ae9c035a4aba/1200x630cq70/photo.jpg",
        kalori: 245,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("DataMakanans", null, {});
  },
};
