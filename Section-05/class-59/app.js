const http = require('http');
const express = require('express');
const { send } = require('process');
const app = express();

app.use('/add-product',(req, res, next) => {
    console.log("Another middleware");
    res.send("<h1>Hello from add product</h1>");
})

app.use('/',(req, res, next) => {
    console.log("Another middleware");
    res.send("<h1>Hello from express</h1>");
})

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);