const cred = require('../models/credentials');
const User = require('../models/userDetails');
const ShopDe = require('../models/Shopdetails');

//user details & user credentials store function
function usrDetails(req, res){
    const {id, usr, passwd, first, last} = req.body
    const newCred = new cred({
        ShopID : id,
        UserName: usr,
        Password: passwd
    });
    const newUser = new User({
        ShopID : id,
        FirstName : first,
        LastName : last
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
    const {shId, shNm, loc, cat, dis} = req.body
    const newShopDe = new ShopDe({
        ShopID : shId,
        ShopName : shNm,
        Location : loc,
        Category : cat,
        Discounts : dis
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