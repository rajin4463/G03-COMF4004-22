const cred = require('../models/credentials');
const User = require('../models/userDetails');
const ShopDe = require('../models/Shopdetails');

//user details & user credentials store function
function usrDetails(req, res){
    const {ShopID, UserName, Password, FirstName, LastName} = req.body
    const newCred = new cred({
        ShopID : ShopID,
        UserName: UserName,
        Password: Password
    });
    const newUser = new User({
        ShopID : ShopID,
        FirstName : FirstName,
        LastName : LastName
    })
    try{
        newCred.save();
        newUser.save();
        res.send({status: "Success!"})
    }
    catch(err){
        console.log(err);
        res.send({status: "Failed!"})
    }
}

//shop details store function
function shopDetails(req, res){
    const {ShopID, ShopName, Location, Category, Discounts} = req.body
    const newShopDe = new ShopDe({
        ShopID : ShopID,
        ShopName : ShopName,
        Location : Location,
        Category : Category,
        Discounts : Discounts
    })
    try{
        newShopDe.save();
        res.send({status: "Success!"})
    }
    catch(err){
        console.log(err);
        res.send({status: "Failed!"})
    }

}

module.exports = {usrDetails, shopDetails};