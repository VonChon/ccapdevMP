// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/userModel.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for `signup` paths in the server
*/
const loginController = {

    /*
        executed when the client sends an HTTP GET request `/signup`
        as defined in `../routes/routes.js`
    */
    getLogin: function (req, res) {
        res.render('login');
    },

    /*
        executed when the client sends an HTTP POST request `/signup`
        as defined in `../routes/routes.js`
    */
    postLogin: function (req, res) {

        /*
            when submitting forms using HTTP POST method
            the values in the input fields are stored in `req.body` object
            each <input> element is identified using its `name` attribute
            Example: the value entered in <input type="text" name="fName">
            can be retrieved using `req.body.fName`
        */
        var name = req.body.name;
        var email = req.body.email;
        var password = req.body.password;

        var user = {
            name: name,
            email: email,
            password: password
        }
        res.render('index');
    }
}

/*
    exports the object `signupController` (defined above)
    when another script exports from this file
*/
module.exports = loginController;