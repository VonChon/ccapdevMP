// import module `express`
const express = require('express');

// import module `controller` from `../controllers/controller.js`
const controller = require('../controllers/controller.js');
const user_controller = require('../controllers/userController');
const product_controller = require('../controllers/productController');
const login_controller = require('../controllers/loginController');

const app = express();

app.get('/', controller.get_index);
app.get('/index', controller.get_index);
app.get('/User', user_controller.getUser);
app.get('/Product', product_controller.getProduct);
app.get('/login', login_controller.getLogin);

module.exports = app;