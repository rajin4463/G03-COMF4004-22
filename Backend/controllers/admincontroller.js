const cred = require('../models/credentials');
const User = require('../models/userDetails');
const ShopDe = require('../models/Shopdetails');

//user details & user credentials store function
async function usrDetails(req, res){
    const {ShopID, UserName, Password, FirstName, LastName} = req.body
    try{
        const newCred = await cred.create({ShopID, UserName, Password})
        const newUser = await User.create({ShopID, FirstName, LastName})
        res.send({status: "Success!"})
    }
    catch(err){
        console.log(err);
        res.send({status: "Failed!"})
    }
}

//shop details store function
async function shopDetails(req, res){
    const {ShopID, ShopName, Location, Discounts} = req.body;
    const {Category} = req.body;
    try{
        const Shop = await ShopDe.create({ShopID, ShopName, Location, Category, Discounts})
        res.send({status: "Success!"})
    }
    catch(err){
        console.log(err);
        res.send({status: "Failed!"})
    }

}

module.exports = {usrDetails, shopDetails};