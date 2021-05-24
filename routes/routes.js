// import module `express`
const express = require('express');

// import module `controller` from `../controllers/controller.js`
const controller = require('../controllers/controller.js');
const login_controller = require('../controllers/loginController.js');
const signup_controller = require('../controllers/signupController.js');
const success_controller = require('../controllers/successController.js');
const product_controller = require('../controllers/productController.js');
const user_controller = require('../controllers/userController.js');

const app = express();

app.get('/', controller.getIndex);

app.get('/login', login_controller.getLogin);
app.post('/login', login_controller.postLogin);

app.get('/signup', signup_controller.getSignUp);
app.post('/signup', signup_controller.postSignUp);

app.get('/success', success_controller.getSuccess);

app.get('/userprofile', user_controller.getUser);

// app.post('/logout', user_controller.logout);

app.get('/products/login', function(req, res){res.redirect('/login')});

app.get('/products/userprofile', function(req, res){res.redirect('/userprofile')});

app.get('/products/Cart', function(req, res){res.render('error404')});

app.get('/products/login', function(req, res){res.redirect('/login')});

app.get('/products', product_controller.getAllProducts);

app.get('/products/:pname', product_controller.getProduct);

module.exports = app;