// import module `express`
const express = require('express');

// // import module `controller` from `../controllers/controller.js`
// const controller = require('../controllers/controller.js');
// // const user_controller = require('../controllers/userController');
// // const product_controller = require('../controllers/productController');
const login_controller = require('../controllers/loginController.js');
const signup_controller = require('../controllers/signupController.js');
const success_controller = require('../controllers/successController.js');

const app = express();

// // app.get('/', login_controller.getLogin);
// // app.get('/Site', controller.getIndex);
// // app.get('/User', user_controller.getUser);
// // app.get('/Product', product_controller.getProduct);
app.get('/', login_controller.getLogin);
app.post('/login.html', login_controller.postLogin);
app.get('/SignUp.html', signup_controller.getSignUp);
app.post('/SignUp.html', signup_controller.postSignUp);

module.exports = app;