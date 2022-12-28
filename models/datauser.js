'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  DataUser.init({
    id_user: DataTypes.INTEGER,
    umur: DataTypes.INTEGER,
    berat_badan: DataTypes.INTEGER,
    tinggi_badan: DataTypes.INTEGER,
    jk: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DataUser',
  });
  return DataUser;
};