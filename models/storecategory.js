'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StoreCategory extends Model {
    static associate(models) {
      StoreCategory.hasMany(models.Store, {
        foreignKey: 'StoreCategoryId',
      });
    }
  }
  StoreCategory.init({
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
    modelName: 'StoreCategory',
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  });
  return StoreCategory;
};