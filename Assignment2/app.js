const http = require('http');

const express = require('express');

const app = express();

app.use('/users',(req, res, next) => {
    console.log('User middleware');
    res.send('<h1>Users endpoint</h1>');
})

app.use((req, res, next) => {
    console.log('Root middleware');
    res.send('<h1>Root endpoint</h1>');
})




app.listen(3000);
