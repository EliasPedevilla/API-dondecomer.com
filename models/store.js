'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    static associate(models) {
      Store.belongsTo(models.StoreCategory)
      Store.belongsTo(models.StoreStatus)
      Store.belongsTo(models.User)
      Store.hasMany(models.Product, {
        foreignKey: 'storeId',
        sourceKey: 'id',
      });
    }
  }
  Store.init({
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      unique: true,
      require: true,
      type: DataTypes.STRING,
    },
    username: {
      allowNull: false,
      unique: true,
      require: true,
      type: DataTypes.STRING,
    },
    storeStatusId: {
      allowNull: false,
      references: {
        model: 'StoreStatus',
        key: 'id',
      },
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    description: DataTypes.STRING,
    phone: {
      unique: true,
      type: DataTypes.STRING,
    },
    address: {
      unique: true,
      type: DataTypes.STRING,
    },
    locationCoordinates: {
      unique: true,
      type: DataTypes.STRING,
    },
    storeCategoryId: {
      references: {
        model: 'StoreCategory',
        key: 'id',
      },
      type: DataTypes.INTEGER,
    },
    facebookUrl: {
      unique: true,
      type: DataTypes.STRING,
    },
    InstagramUrl: {
      unique: true,
      type: DataTypes.STRING,
    },
    twiterUrl: {
      unique: true,
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Store',
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  });
  return Store;
};