// import module `bcrypt`
const bcrypt = require('bcrypt');

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
        console.log("entered post login")

        var email = req.body.email;
        var name = req.body.name;
        var password = req.body.password;

        var query = { email: email }
    
        db.findOne(User, query, '', function (result) {
           
            if(result) {
                var user = {
                    email: result.email,
                    name: result.name
                };
                bcrypt.compare(password, result.password, function(err, equal) {
                    if(equal){
                        // req.session.name = user.name;
                        // req.session.email = user.emmail;
                        res.redirect('/success?name=' + user.name);
                        
                    }
                    else {
                        console.log("Not equal...")
                        var details = {error: `Email and/or Password is incorrect.`}
                        res.render('login', details);
                    }
                });
            }
    
            else {
                var details = {error: `Email and/or Password is incorrect.`}
                res.render('login', details);
            }
        });
    }
}

/*
    exports the object `signupController` (defined above)
    when another script exports from this file
*/
module.exports = loginController;