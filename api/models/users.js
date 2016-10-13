const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var recordSchema = mongoose.Schema({
    username: String,
    password: String
});

module.exports= mongoose.model('users', recordSchema)
