'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Store, {
        foreignKey: 'userId',
      });
    }
  }
  User.init({
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    photo: {
      unique: true,
      type: DataTypes.STRING,
    },
    userRoleId: {
      allowNull: false,
      references: {
        model: 'UserRole',
        key: 'id',
      },
      type: DataTypes.INTEGER,
      defaultValue: 2,
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  });
  return User;
};