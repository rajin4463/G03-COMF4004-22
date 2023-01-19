const cred = require('../models/credentials');  // required models
const User = require('../models/userDetails');
const ShopDe = require('../models/Shopdetails');

//user details & user credentials store function
async function usrDetails(req, res){   // takes both request and response
    const {ShopID, UserName, Password, FirstName, LastName} = req.body      //destructures the request body to extract the values
    try{
        const newCred = await cred.create({ShopID, UserName, Password})   // create a new document with the extracted values
        const newUser = await User.create({ShopID, FirstName, LastName})
        res.send({status: "Success!"})   // checks status of the created document
    }
    catch(err){
        console.log(err);
        res.send({status: "Failed!"})
    }
}

//shop details store function
async function shopDetails(req, res){   // takes both request and response
    const {ShopID, ShopName, Location, Discounts} = req.body;      //destructures the request body to extract the values
    const {Category} = req.body;
    try{
        const Shop = await ShopDe.create({ShopID, ShopName, Location, Category, Discounts})   // create a new document with the extracted values
        res.send({status: "Success!"})   // checks status 
    }
    catch(err){
        console.log(err);
        res.send({status: "Failed!"})
    }

}

module.exports = {usrDetails, shopDetails};  // eports both the functions 