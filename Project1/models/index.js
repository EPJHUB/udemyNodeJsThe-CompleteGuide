const Cart = require("./Cart");
const Order = require("./Order");
const Product = require("./Product");
const ProductsCart = require("./ProductsCart");
const ProductsOrder = require("./ProductsOrder");
const User = require("./User");


Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'})
User.hasMany(Product)

User.hasOne(Cart)
Cart.belongsTo(User)

Product.belongsToMany(Cart, {through: ProductsCart})
Cart.belongsToMany(Product, {through: ProductsCart})

Order.belongsTo(User)
User.hasMany(Order)

Product.belongsToMany(Order, {through: ProductsOrder})
Order.belongsToMany(Product, {through: ProductsOrder})