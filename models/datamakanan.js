'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataMakanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DataMakanan.init({
    nama_makanan: DataTypes.STRING,
    url_image: DataTypes.STRING,
    kalori: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DataMakanan',
  });
  return DataMakanan;
};