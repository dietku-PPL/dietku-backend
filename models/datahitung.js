'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataHitung extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DataHitung.init({
    id_user: DataTypes.INTEGER,
    id_data: DataTypes.INTEGER,
    hitung_kalori: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DataHitung',
  });
  return DataHitung;
};