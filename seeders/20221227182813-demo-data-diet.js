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
      },
      {
        jenis_diet: "Diet Tinggi Protein",
        desc_diet: "Diet tinggi protein merupakan diet yang mengutamakan konsumsi protein dan mengurangi asupan karbohidrat dan lemak. Diet ini memiliki perbedaan dari diet rendah karbohidrat. Dalam diet rendah karbo, jumlah kandungan lemak yang diizinkan untuk konsumsi masih lebih tinggi daripada di dalam diet tinggi protein.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jenis_diet: "Diet Protein Shake",
        desc_diet: "Diet tinggi protein merupakan diet yang mengutamakan konsumsi protein dan mengurangi asupan karbohidrat dan lemak. Diet ini memiliki perbedaan dari diet rendah karbohidrat. Dalam diet rendah karbo, jumlah kandungan lemak yang diizinkan untuk konsumsi masih lebih tinggi daripada di dalam diet tinggi protein.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jenis_diet: "Diet Vegan",
        desc_diet: "Diet vegan adalah cara diet yang menghindari semua produk hewani seperti daging, telur dan produk susu. Mulai dari kepedulian terhadap lingkungan, masalah etika, hingga meningkatkan kesehatan tubuh dapat menjadi alasan untuk seseorang menjalankan diet vegan.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("DataDiets", null, {});
  }
};
