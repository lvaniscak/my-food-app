
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: String,
    password:  String,
    email: String
});

const User = mongoose.model('User', taskSchema);

module.exports = User;
