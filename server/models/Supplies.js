const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    category: String,
    name: String,
    quantity: Number
});

const Supplies = mongoose.model('store', StoreSchema);

module.exports = Supplies;