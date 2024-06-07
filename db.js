
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://knihomolka2:NicolVan@databadse.mprrui4.mongodb.net/taskdb?retryWrites=true&w=majority&appName=databadse', {
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
