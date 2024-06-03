const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRoutes = require('./routes/admin.router');
const shopRoutes = require('./routes/shop.router');
const path = require('path');
const { getError } = require('./controllers/error.controller');
const sequelize = require('./utils/database')

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use(getError)

sequelize.sync().then(result => {
    console.log(result)
}).catch(err => {
    console.log(err)
})

app.listen(3000);