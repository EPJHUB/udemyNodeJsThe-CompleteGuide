const express = require('express');
const { getProducts, getAddProduct, postAddProduct } = require('../controllers/admin.controller');
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', getAddProduct);

// /admin/products => GET
router.get('/products', getProducts);

// /admin/add-product => POST
router.post('/add-product', postAddProduct);

module.exports = router;