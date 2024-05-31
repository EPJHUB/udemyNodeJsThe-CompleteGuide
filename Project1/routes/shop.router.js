const express = require("express");
const { getIndex, getCart, getOrders, getCheckout, getProducts } = require("../controllers/shop.controller");

const router = express.Router();

router.get('/', getIndex);

router.get('/products', getProducts);

router.get('/cart', getCart);

router.get('/orders', getOrders);

router.get('/checkout', getCheckout);

module.exports = router;




