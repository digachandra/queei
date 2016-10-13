const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var recordSchema = mongoose.Schema({
    title: String
});

module.exports= mongoose.model('users', recordSchema)
