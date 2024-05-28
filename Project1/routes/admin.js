const express = require('express');
const path = require('path')
const router = express.Router();
const root = require('../utils/path');

const products = []

router.get('/add-product', (req, res) => {
    res.render('add-product', {pageTitle: 'add-product', path: '/admin/add-product'});
})

router.post('/add-product', (req, res) => {
    // console.log(req.body)
    products.push({title: req.body.title})
    res.redirect('/')
})

// module.exports = router;
exports.routes = router;
exports.products = products;