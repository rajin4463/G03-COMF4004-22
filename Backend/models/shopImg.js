const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShopImageSchema = new Schema({
    imageID:{
        type: Number,
        required: true
    },
    image:{
        data: Buffer,
        contentType: String
    },
    shopID:{
        type: String,
        required: true
    }
}, {timestamps: true});

const ShopMan = mongoose.model('ShopImage', ShopImageSchema);
module.exports = ShopMan;