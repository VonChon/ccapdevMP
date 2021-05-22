// import module `express`
const express = require('express');

// import module `controller` from `../controllers/controller.js`
const controller = require('../controllers/controller');
const login_controller = require('../controllers/loginController.js');
const signup_controller = require('../controllers/signupController.js');
const success_controller = require('../controllers/successController.js');

// const product_controller = require('../controllers/productController');
// const user_controller = require('../controllers/userController');
const app = express();

app.get('/', login_controller.getLogin);
app.get('/login', login_controller.getLogin);
app.post('/login', login_controller.postLogin);



app.get('/signup', signup_controller.getSignUp);
app.post('/signup', signup_controller.postSignUp);

app.get('/success', success_controller.getSuccess);

app.get('/index', controller.getIndex);

// app.get('/User/:name', user_controller.getUser);
// app.post('/logout', user_controller.logout);
// app.get('/products/:pname', product_controller.getProduct);

module.exports = app;