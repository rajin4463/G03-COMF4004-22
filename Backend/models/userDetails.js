
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDetailSchema = new Schema({
    ShopID:{
        type: Number,
        require: true
    },
    FirstName:{
        type: String,
        require: true
    },
    LastName:{
        type: String,
        require: true
    }


},{timestamps: true});

const UserDetail = mongoose.model('UserDetail',userDetailSchema);
module.exports = UserDetail;