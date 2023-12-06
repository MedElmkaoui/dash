// models/User.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  cin: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  salary: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  dateinscription: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  adresse: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

(async () => {
    await sequelize.sync({ force: false });
  })();

module.exports = User;
