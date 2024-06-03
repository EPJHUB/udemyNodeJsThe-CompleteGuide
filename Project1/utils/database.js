const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('node-complete', 'root', 'Paje9458+', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;