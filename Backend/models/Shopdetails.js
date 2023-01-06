const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new Schema({
    ShopID:{
        type:Number,
        required:true
    },
    ShopName:{
        type:String,
        required: true
    },
    Location:{
        type:String,
        required: true
    },
    Category:[String],
    Discounts:{
        type:String,
        required:true
    }
})

const Shop = mongoose.model('Shop',shopSchema);
module.exports = Shop;
