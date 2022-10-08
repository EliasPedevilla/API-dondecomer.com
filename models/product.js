'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.ProductCategory)
      Product.belongsTo(models.Store)
    }
  }
  Product.init({
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      require: true,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    photo: DataTypes.STRING,
    promotion: DataTypes.STRING,
    available: {
      allowNull: false,
      require: true,
      type: DataTypes.BOOLEAN,
    },
    price: {
      allowNull: false,
      require: true,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      allowNull: false,
      references: {
        model: 'ProductCategories',
        key: 'id',
      },
      type: DataTypes.INTEGER
    },
    storeId: {
      allowNull: false,
      references: {
        model: 'Stores',
        key: 'id',
      },
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Product',
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  });
  return Product;
};