
// scheama for the user details
// requiring the mongoose module
const mongoose = require('mongoose');  
const Schema = mongoose.Schema;

//fields of scheama with data type
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


},{timestamps: true});    //enable the timestamps to create and update 

const UserDetail = mongoose.model('UserDetail',userDetailSchema);   //creates a new Mongoose model so this model can be used to interact with the corresponding MongoDB collection
module.exports = UserDetail;   //exports the model