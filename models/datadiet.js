'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataDiet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DataDiet.init({
    jenis_diet: DataTypes.STRING,
    desc_diet: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DataDiet',
  });
  return DataDiet;
};