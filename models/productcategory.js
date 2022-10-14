'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductCategory extends Model {
    static associate(models) {
      ProductCategory.hasMany(models.Product, {
        foreignKey: 'categoryId',
        sourceKey: 'id',
      });;
    }
  }
  ProductCategory.init({
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
    modelName: 'ProductCategory',
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  });
  return ProductCategory;
};