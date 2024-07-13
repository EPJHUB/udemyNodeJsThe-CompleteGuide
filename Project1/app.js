const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRoutes = require('./routes/admin.router');
const shopRoutes = require('./routes/shop.router');
const path = require('path');
const { getError } = require('./controllers/error.controller');
const sequelize = require('./utils/database');
const User = require('./models/User');
const { name } = require('ejs');
const Cart = require('./models/Cart');
require('./models/index')

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
    User.findByPk(1)
    .then(
        user => {
            req.user = user;
            next();
        }
    )
    .catch(err => {console.log(err)})
})

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use(getError)

sequelize
// .sync({force: true})
.sync()
.then(result => {
    return User.findByPk(1)
})
.then(user => {
    if(!user){
        return User.create({name: 'Erick', email: 'erick@test.com'})
    }
    return user
})
.then(user => {
    Cart.findByPk(1)
    .then(cart=> {
        if(!cart){
            return user.createCart()
        }
        return cart
    })
})
.then(cart => {
    app.listen(3000);
})
.catch(err => {
    console.log(err)
})
