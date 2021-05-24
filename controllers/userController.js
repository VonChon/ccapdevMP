// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/userModel.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for `profile` paths in the server
*/
const userController = {

    getUser: function (req, res) {

        var query = { user_name: req.params.user_name };

        var projection = '';
        db.findOne(User, query, projection, function (result) {

            if (result != null) {
                var details = {
                    "name": result.name,
                    "email": result.email,
                    "description": result.description,
                    // "image": result.image
                };
                res.render('userprofile', details);
            }
            else {
                res.render('error404');
            }
        });
    },

    addUser: function(req, res) {
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            description: req.body.description,
            //avatar: req.body.avatar
        };
        db.insertOne(User, user, function (result) {
            if(result) {
                res.status(200).send();
                //res.render('User', user);
            } else {
                alert('Update failed.');
                res.status(500).send();
                //res.render('User');
            }
        });
    },
    updateUser: function (req, res) {
        //INFO VALIDATION IS NEEDED
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            description: req.body.description,
            //avatar: req.body.avatar
        };
        db.updateOne(User, { name : req.body.name }, user, function(result) {
            if(result) {
              res.status(200);
              res.render('User', user);
            } else {
              alert('Update failed.');
              res.render('User');
            }
        });
    },
    deleteUser: function(req, res) {
        db.deleteOne(User, { name: req.body.name }, function (result) {
            if(result) {
                res.status(200);
                res.render('User');
            } else {
                alert('Update failed.');
                res.render('User');
            }
        });
    }
}

/*
    exports the object `profileController` (defined above)
    when another script exports from this file
*/
module.exports = userController;