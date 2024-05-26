const express = require('express');
const path = require('path')
const router = express.Router();
const root = require('../utils/path');

const products = []

router.get('/add-product', (req, res) => {
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>');
    // res.sendFile(path.join(root, 'views', 'add-product.html'));
    res.render('add-product', {pageTitle: 'add-product'});
})

router.post('/add-product', (req, res) => {
    // console.log(req.body)
    products.push({title: req.body.title})
    res.redirect('/')
})

// module.exports = router;
exports.routes = router;
exports.products = products;