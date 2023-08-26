// mongoose schema for credentials model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const credentialsSchema = new Schema({
// 3 fields: 
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
},{timestamps: true}); //enables time stamps 

// model exported to use in other parts of the application 
const Credentials = mongoose.model('credentials',credentialsSchema);
module.exports = Credentials;
