const express = require('express');
const path = require('path')
const root = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/',(req, res) => {
    const products = adminData.products;
    res.render('shop',{prods: products, docTitle: 'Shop'});
    // res.sendFile(path.join(root, 'views', 'shop.html'));
    // res.send("<h1>Hello from root</h1>");
})


module.exports = router