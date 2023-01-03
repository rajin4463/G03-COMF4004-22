const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const credentialsSchema = new Schema({

ShopID:{
    type: Number,
    require: true
},
UserName:{
    type: String,
    require: true
},
Password:{
    type: String,
    require: true
},
},{timestamps: true});

const Credentials = mongoose.model('credentials',credentialsSchema);
module.exports = Credentials;
