const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const ProductsCart = sequelize.define('productsCart', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      qty: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
});

module.exports = ProductsCart;