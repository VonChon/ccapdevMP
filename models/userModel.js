// import module `mongoose`
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// defines the schema for collection `users`
var UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unqiue: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    avatar: {
        type: String 
    }
});

/*
    exports a mongoose.model object based on `UserSchema` (defined above)
    when another script exports from this file
    This model executes CRUD operations
    to collection `users` -> plural of the argument `User`
*/
module.exports =  mongoose.model('User', UserSchema);