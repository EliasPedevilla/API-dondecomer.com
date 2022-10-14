'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StoreStatus extends Model {

    static associate(models) {
      StoreStatus.hasMany(models.Store, {
        foreignKey: 'statusId',
      });
    }
  }
  StoreStatus.init({
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      unique: true,
      require: true,
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'StoreStatus',
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  });
  return StoreStatus;
};