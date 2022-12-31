const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShopSchema = new Schema({
    shopname: {
        type: String,
        required: true
    },
    shopID: {
        type: Number,
        required: true
    },
    categories: [{
        type: String,
        required: true
    }],
    location: {
        type: String,
        required: true
    },
    discounts: {
        type: Boolean,
        required: true
    } 
}, {timestamps: true});

module.exports = mongoose.model('ShopDetails', ShopSchema);
