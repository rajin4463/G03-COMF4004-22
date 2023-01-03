
const bodyParse = require("body-parser");
const mongoose =require("mongoose");
mongoose.set('strictQuery', true)

const url='mongodb://127.0.0.1:27017/myapp'
try{
  connect(url);
  console.log('connected to the database');
}catch(err){
  console.log(err);
}

async function connect(url){
    await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
}
const cred = require('./models/credentials');
const User = require('./models/userDetails');
function usrDetails(id, usr, passwd, first, last){
    const newCred = new cred({
        ShopID : id,
        UserName: usr,
        Password: passwd
    })
    try{
        newCred.save();
    }
    catch(err){
        console.log(err);
    }
    const newUser = new User({
        ShopID : id,
        FirstName : first,
        LastName : last
    })
    try{
        newUser.save();
    }
    catch(err){
        console.log(err);
    }

}

usrDetails(1234, "ann", "ywwwt", "anne", "gune")

const ShopDe = require('./models/Shopdetails');
function shopDetails(id, shNm, loc, cate, dis){
    const newShopDe = new ShopDe({
        ShopID : id,
        ShopName : shNm,
        Location : loc,
        Category : cate,
        Discounts : dis
    })
    try{
        newShopDe.save();
    }
    catch(err){
        console.log(err);
    }

}
shopDetails(1234, "odel", "negombo", "fashion", true)