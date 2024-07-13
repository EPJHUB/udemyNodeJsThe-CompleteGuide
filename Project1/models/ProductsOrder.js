const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const ProductsOrder = sequelize.define('productsOrder', {
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

module.exports = ProductsOrder;