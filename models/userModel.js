// import module `mongoose`
var mongoose = require('mongoose');

// defines the schema for collection `users`
var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

/*
    exports a mongoose.model object based on `UserSchema` (defined above)
    when another script exports from this file
    This model executes CRUD operations
    to collection `users` -> plural of the argument `User`
*/
module.exports = mongoose.model('User', UserSchema);