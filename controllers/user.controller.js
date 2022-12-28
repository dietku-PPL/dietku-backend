const models = require("../models");
const { DataUser } = models;

module.exports = {
  getAllUser: async (req, res, next) => {
    try {
      const data = await DataUser.findAll();
      res.status(200).json({
        message: "success get data",
        data,
      });
    } catch (err) {
      next(err);
    }
  },

  getUserByID: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await DataUser.findOne({ where: { id_user: id } });
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

  addUser: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { umur, berat_badan, tinggi_badan, jk } = req.body;

      await DataUser.create({
        id_user: id,
        umur,
        berat_badan,
        tinggi_badan,
        jk,
      });

      res.status(201).json({
        message: "success create data",
      });
    } catch (error) {
      next(error);
    }
  },

  deleteUserByID: async (req, res, next) => {
    const { id } = req.params;
    await DataUser.destroy({
      where: {
        id_user: id,
      },
    });

    res.status(204).json({
      message: "resource deleted successfully",
    });
  },

  updateUserByID: async (req, res, next) => {
    const { id } = req.params;
    const { umur, berat_badan, tinggi_badan, jk } = req.body;

    await DataUser.update(
      {
        umur,
        berat_badan,
        tinggi_badan,
        jk,
      },
      {
        where: { id_user: id },
      }
    );

    res.status(201).json({
      message: "updated data successfull",
    });
  },
};
