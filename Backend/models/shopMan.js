const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopManSchema = new Schema({
    imageID:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true,
    },
    ShopID:{
        type: String,
        required: true
    }
}, {timestamps: true});

const ShopMan = mongoose.model('shop', shopManSchema);
module.exports = ShopMan;