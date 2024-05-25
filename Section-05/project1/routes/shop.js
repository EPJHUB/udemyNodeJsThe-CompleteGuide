const express = require('express');
const path = require('path')

const router = express.Router();

router.use('/',(req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    // res.send("<h1>Hello from root</h1>");
})


module.exports = router