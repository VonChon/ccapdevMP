// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/userModel.js');

// import module `validationResult` from `express-validator`
const { validationResult } = require('express-validator');

// import module `bcrypt`
const bcrypt = require('bcrypt');
const saltRounds = 10;

/*
    defines an object which contains functions executed as callback
    when a client requests for `signup` paths in the server
*/
const signupController = {

    /*
        executed when the client sends an HTTP GET request `/signup`
        as defined in `../routes/routes.js`
    */
    getSignUp: function (req, res) {
        res.render('signup');
    },

    /*
        executed when the client sends an HTTP POST request `/signup`
        as defined in `../routes/routes.js`
    */
    postSignUp: function (req, res) {

        // checks if there are validation errors
        var errors = validationResult(req);

        if(!errors.isEmpty()) {
            errors = errors.errors;

            var details = {};
            for(i = 0; i < errors.length; i++)
                details[errors[i].param + 'Error'] = errors[i].msg;

            res.render('/signup', details);
        }
        else {
            var email = req.body.email;
            var name = req.body.name;
            var password = req.body.password;

            bcrypt.hash(password, saltRounds, function(err, hash) {
                var user = {
                email: email,
                name: name,
                password: hash
                }

                db.insertOne(User, user, function(flag) {
                    if(flag) {
                        res.redirect('/success?name=' + name);
                    }
                });
            });
        }
    }
}

/*
    exports the object `signupController` (defined above)
    when another script exports from this file
*/
module.exports = signupController;