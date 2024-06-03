const express = require('express');
const { getProducts, getAddProduct, postAddProduct, getEditProduct, postEditProduct, postDeleteProduct } = require('../controllers/admin.controller');
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', getAddProduct);

// /admin/products => GET
router.get('/products', getProducts);

// /admin/add-product => POST
router.post('/add-product', postAddProduct);

router.post('/edit-product', postEditProduct);

router.get('/edit-product/:productId', getEditProduct);

router.post('/delete-product', postDeleteProduct)



module.exports = router;