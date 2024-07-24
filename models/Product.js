const mongoose = require('mongoose');

const ProductSchema =mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    ubication: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;