const express = require('express');
const path = require('path')
const root = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/',(req, res) => {
    const products = adminData.products;
    res.render('shop',{prods: products, pageTitle: 'Shop', path: '/'});
    // res.sendFile(path.join(root, 'views', 'shop.html'));
    // res.send("<h1>Hello from root</h1>");
})


module.exports = router