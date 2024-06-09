const mongoose = require('mongoose');

const SignUpSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const Register = mongoose.model('signup', SignUpSchema);

module.exports = Register;