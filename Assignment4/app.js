const express = require('express')
const app = express();
const bodyParser = require('body-parser');

const users = []


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/users', (req, res ,next) => {
    res.render('users', {users: users});
})

app.get('/', (req, res, next) => {
    // res.send('<h1> Hola desde express</h1>');
    res.render('root');
})

app.post('/', (req, res, next) => {
    console.log(req.body.user);
    users.push({name: req.body.user});
    res.redirect('/users');
})

app.listen(3000);