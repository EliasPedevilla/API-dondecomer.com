'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    static associate(models) {
      Store.belongsTo(models.StoreCategory, { foreignKey: 'categoryId' })
      Store.belongsTo(models.StoreStatus, { foreignKey: 'statusId' })
      Store.belongsTo(models.User, { foreignKey: 'userId' })
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
      allowNull: true,
      unique: true,
      require: true,
      type: DataTypes.STRING,
    },
    username: {
      allowNull: true,
      unique: true,
      require: true,
      type: DataTypes.STRING,
    },
    statusId: {
      allowNull: false,
      references: {
        model: 'StoreStatus',
        key: 'id',
      },
      type: DataTypes.INTEGER,
      defaultValue: 2
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
    categoryId: {
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