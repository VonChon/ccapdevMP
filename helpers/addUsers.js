// import module from `../models/db.js`
const db = require('../models/db.js');
const User = require('../models/userModel');

db.connect();

/*
    creates an object
    containing first name, last name, username, and bio of a user
*/
const users = [
    {name: 'John', email: 'john@gmail.com', password: 'john1', description: 'I like hotdogs'},
    {name: 'english', email: 'english@gmail.com', password: 'english1', description: 'Hello!'},
    {name: 'japan', email: 'japan@gmail.com', password: 'japan1', description: 'Sayonara'},
    {name: 'german', email: 'german@gmail.com', password: 'german1', description: 'Guten Morgen'},
    {name: 'french', email: 'french@gmail.com', password: 'french1', description: 'Bonjour'},
]


db.insertMany(User, users, () => console.log('Users inserted successfully'));