const express = require("express");
const { getIndex, getCart, getOrders, getCheckout, getProducts, getProduct, postCart, postCartDeleteProduct, postOrder } = require("../controllers/shop.controller");

const router = express.Router();

router.get('/', getIndex);

router.get('/products', getProducts);

router.get('/products/:productId', getProduct);

router.get('/cart', getCart);

router.post('/cart', postCart);

router.get('/orders', getOrders);

router.post('/create-order', postOrder)

router.post('/cart-delete-item', postCartDeleteProduct)


module.exports = router;




