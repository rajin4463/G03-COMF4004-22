const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new Schema({
   
ShopID:{
    type: Number,
    require: true
},
ShopName:{
    type: String,
    require: true
},
Location:{
    type: String,
    require: true
},
Categories: [{
    type: String,
    required: true
}],
Discounts:{
    type: Boolean,
    require: true
}
},{timestamps: true});

const Shop = mongoose.model('Shop',shopSchema);
module.exports = Shop;
