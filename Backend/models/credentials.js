// for schema 
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const credentialsSchema = new Schema({
    UserName:{
        type:String,
        // lowercase:true,
        required:true
        // unique:true,
        //min:
        //max:
    },
    Password:{
        type: String,
        required:true,
        //min:
    },
    ShopID:{
        type:Number,
        required:true,
        
    },
},
{timestamps: true});

//enter ()
//var or const 

const Credentials = mongoose.model('credentials', credentialsSchema);
module.exports = Credentials;

//module.exports = mongoose.model('logInInfo', logInSchema);