const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const root = require('./utils/path');

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminData.routes);

app.use(shopRoutes);

app.use((req, res) => {
    // res.status(404).sendFile(path.join(root, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: 'Page not found'});
})

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);