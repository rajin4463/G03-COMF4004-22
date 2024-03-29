require('dotenv').config();
const jwt = require('jsonwebtoken');
const Credentials = require('../models/credentials');

//ADMIN LOGIN 
async function AdminLogIn(req, res){
  let admin_password
    try {
        const {UserName, Password} = req.body;
        //if username or password is null 
        if (!(UserName && Password)){
            res.status(400).send("All input required");
        }
        let admin_user;
        //try catch block to see if the username exsists else send "Invalid credentials"
        try{
            const admin_user_collection = await Credentials.findOne({UserName:UserName});
            admin_user = admin_user_collection;
        }
        catch{
            return res.send({"status":"Invalid credentials"});
        }
      try{
        admin_password = admin_user.Password;
      }
      catch{
        return res.send({"status":"Invalid credentials"});
      }
        //check if password is correct 
        if(admin_user && (Password == admin_password )){
            const AD_searchID = admin_user.ShopID;
            if (AD_searchID == process.env.ADMINID){
                //JWT access token generation
                const payload = {
                    UserName: admin_user.UserName,
                    exp: Math.floor(Date.now() / 1000) + (60 * 60)
                };                  
                const accesToken = jwt.sign(payload, process.env.ADMIN_ACCESS_TOKEN)
                //local storage 
                res.send({
                    "ShopID": AD_searchID,
                    "Role":"Admin",
                    "token": accesToken
                })
        
            }else{
                return res.send({"status":"Invalid credentials"});
            } 
        }else{
            return res.send({"status":"Invalid credentials"});
        }   
    }
    catch (err) {
        console.log(err)
    }
}


//SHOP MANAGER LOGIN
async function ShopManLogIn(req, res){
  let shopman_password
    try {
        const {UserName, Password} = req.body;

        if (!(UserName && Password)){
            res.status(400).send("All input required");
        }
        let shopman_user;
        try{
            const shopman_user_collection = await Credentials.findOne({UserName:UserName});
            shopman_user = shopman_user_collection;
        }catch{
            return res.send({"status":"Invalid credentials"});
        }
      try{  
      shopman_password = shopman_user.Password;
      }
      catch{
        return res.send({"status":"Invalid credentials"});
      }

        if(shopman_user && (Password == shopman_password )) {
            const SM_searchID = shopman_user.ShopID;
            if (SM_searchID != process.env.ADMINID){
                //JWT access token generation
                const payload = {
                    UserName: shopman_user.UserName,
                    exp: Math.floor(Date.now() / 1000) + (60 * 60)
                };   
                const accesToken = jwt.sign(payload, process.env.MANAGER_ACCESS_TOKEN)
                //local storage 
                res.send({
                    "ShopID": SM_searchID,
                    "Role":"Manager",
                    "token": accesToken
                })

            }else{
                return res.send({"status":"Invalid credentials"});
            }   
        }else{
            return res.send({"status":"Invalid credentials"});
        }   
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = {AdminLogIn, ShopManLogIn}