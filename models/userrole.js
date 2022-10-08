'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    static associate(models) {

    }
  }
  UserRole.init({
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
    modelName: 'UserRole',
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  });
  return UserRole;
};