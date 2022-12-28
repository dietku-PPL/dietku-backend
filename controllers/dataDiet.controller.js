const models = require("../models");
const { DataDiet } = models;

module.exports = {
  getAllDiet: async (req, res, next) => {
    try {
      const data = await DataDiet.findAll();
      res.status(200).json({
        message: "success get data",
        data,
      });
    } catch (err) {
      next(err);
    }
  },

  getDietById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await DataDiet.findOne({ where: { id } });
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

  addDiet: async (req, res, next) => {
    try {
      const { jenis_diet, desc_diet } = req.body;

      await DataDiet.create({
        jenis_diet,
        desc_diet,
      });

      res.status(201).json({
        message: "success create data",
      });
    } catch (err) {
      next(err);
    }
  },

  deleteDiet: async (req, res, next) => {
    try {
      const { id } = req.params;

      await DataDiet.destroy({
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

  updateDiet: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { jenis_diet, desc_diet } = req.body;

      await DataDiet.update(
        {
          jenis_diet,
          desc_diet,
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
};
