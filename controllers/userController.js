// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/userModel.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for `profile` paths in the server
*/
const userController = {

    addUser: function(req, res) {
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            description: req.body.description,
            avatar: req.body.avatar
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
            avatar: req.body.avatar
        };
        db.updateOne(User, { name : req.body.name }, user, (result) => {
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
    },
    // ------------------------------------

    // getLogin: function (req, res) {
    //     if(req.session.name) {
    //       const user = {
    //         name: req.session.name,
    //         email: req.session.email,
    //         description: req.session.description,
    //         avatar: req.session.avatar
    //       };
    //       res.status(200).json({ success: true, user });
    //     } else {
    //       res.json({ success: false });
    //     }
    //   },
    //   login: function (req, res) {
    
    //     if(errors.isEmpty()) {
    //       const { username, password, remember } = req.body;
    
    //       db.findOne(User, { username }, (result) => {
    //         if(result) {
              
    //           if(bcrypt.compareSync(password, result.password)) {
    //             // only keep the user logged in, if user asked to be `remember` is true
    //             if(remember) {
    //               req.session.userId = result.userId;
    //               req.session.avatar = result.avatar;
    //               req.session.username = result.username;
    //               req.session.fullname = result.fullname;
    //               req.session.email = result.email;
    //               req.session.birthday = result.birthday;
    //               req.session.userType = result.userType;
    //             }
    //             res.status(200).json({success: true, user : result})
    //           } else {
    //             res.json({success: false, errorMessage: 'Incorrect password...'})
    //           }
    //         } else {
    //           res.json({success: false, errorMessage: 'Username doesn\'t exist...'})
    //         }
    //       })
    //     }
    //   },
    //   logout: (req, res) => {
    //     req.session.destroy((err) => {
    //       if(err) {
    //         res.json({ success: false });
    //         throw err;
    //       }
    
    //       res.json({ success: true });
    //   });
    //   }
}

/*
    exports the object `profileController` (defined above)
    when another script exports from this file
*/
module.exports = userController;