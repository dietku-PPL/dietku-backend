"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("DataMakanans", [
      {
        nama_makanan: "Kentang Rebus",
        url_image: "https://img.okezone.com/content/2022/06/07/298/2607271/berapa-kalori-kentang-rebus-ketahui-jawabannya-di-sini-h85s33s4IY.jpg",
        kalori: 83,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_makanan: "Nasi Putih",
        url_image: "https://t-2.tstatic.net/jogja/foto/bank/images/nasi-ilustrasi_20180211_203232.jpg",
        kalori: 175,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_makanan: "Ubi Rebus",
        url_image: "https://awsimages.detik.net.id/community/media/visual/2020/11/11/ubi-rebus_169.jpeg?w=700&q=90",
        kalori: 125,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_makanan: "Bubur Sum Sum",
        url_image: "https://ik.imagekit.io/dcjlghyytp1/2020/04/resepku_yummy.jpg?tr=f-auto",
        kalori: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_makanan: "Pepaya",
        url_image: "https://images.tokopedia.net/img/cache/700/product-1/2020/2/15/5271400/5271400_70af9e18-43a8-48be-bf6f-78e6d9009ca1_1278_1278.jpg",
        kalori: 46,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_makanan: "Apel",
        url_image: "https://s3.bukalapak.com/bukalapak-kontenz-production/content_attachments/86533/original/manfaat_buah_apel.jpg",
        kalori: 83,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_makanan: "Ati Ayam Goreng",
        url_image: "https://awsimages.detik.net.id/community/media/visual/2022/02/14/resep-hari-ayam-goreng-ketumbar_43.jpeg?w=700&q=90",
        kalori: 196,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_makanan: "Bakso",
        url_image: "https://www.piknikdong.com/wp-content/uploads/2020/06/Resep-Bakso-Sapi-Praktis.jpg",
        kalori: 260,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_makanan: "Tahu Bacem",
        url_image: "https://o-cdn-cas.sirclocdn.com/parenting/images/131466499_899437014199767_1336502778798691822_.width-800.jpg",
        kalori: 147,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_makanan: "Tempe Goreng",
        url_image: "https://cdn0-production-images-kly.akamaized.net/G8MNimwOOwYyKOsC9ayApb--cnw=/0x345:5792x3610/673x373/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3493625/original/011678000_1624676204-shutterstock_1985813441.jpg",
        kalori: 236,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_makanan: "Nasi Goreng",
        url_image: "https://cdn2.tstatic.net/travel/foto/bank/images/kuliner-nasi-goreng-jawa-enak-untuk-menu-sarapan.jpg",
        kalori: 267,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_makanan: "Gulai Cumi",
        url_image: "https://resepkoki.id/wp-content/uploads/2017/12/Resep-Gulai-Cumi-Isi-Telur.jpg",
        kalori: 183,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_makanan: "Perkedel",
        url_image: "https://cdn0-production-images-kly.akamaized.net/kl2pC3BofCqH2WXK58ArnPtSpnk=/0x783:1366x1553/1200x675/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3165876/original/096813700_1593488609-shutterstock_1715535250.jpg",
        kalori: 123,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_makanan: "Tahu Goreng",
        url_image: "https://cdn1-production-images-kly.akamaized.net/akNE3379URS1WWeAYThXrNSzYYQ=/0x0:5616x3165/1200x675/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2901423/original/005536300_1567581573-tips_tahu_HL.jpg",
        kalori: 111,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("DataMakanans", null, {});
  },
};
