const models = require("../models");
const { DataMakanan } = models;

module.exports = {
  getAllMakanan: async (req, res, next) => {
    try {
      const data = await DataMakanan.findAll();
      res.status(200).json({
        message: "success get data",
        data,
      });
    } catch (err) {
      next(err);
    }
  },

  getMakananById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await DataMakanan.findOne({ where: { id } });
      data
        ? res.status(200).json({
            message: "success get data",
            data,
          })
        : res.status(400).json({
            message: "data not found",
          });
    } catch (err) {
      next(err);
    }
  },

  addMakanan: async (req, res, next) => {
    try {
      const { nama_makanan, url_image, kalori } = req.body;

      await DataMakanan.create({
        nama_makanan,
        url_image,
        kalori,
      });

      res.status(201).json({
        message: "success create data",
      });
    } catch (err) {
      next(err);
    }
  },

  updateMakanan: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { nama_makanan, url_image, kalori } = req.body;

      await DataMakanan.update(
        {
          nama_makanan,
          url_image,
          kalori,
        },
        {
          where: { id },
        }
      );

      res.status(201).json({
        message: "updated data successfull",
      });
    } catch (err) {
      next(err);
    }
  },

  deleteMakanan: async (req, res, next) => {
    try {
      const { id } = req.params;

      await DataMakanan.destroy({
        where: {
          id,
        },
      });

      res.status(204).json({
        message: "resource deleted successfully",
      });
    } catch (err) {
      next(err);
    }
  },
};
