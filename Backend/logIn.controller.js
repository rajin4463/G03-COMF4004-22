require('dotenv').config();
const Credentials = require('../models/credentials');

//ADMIN LOGIN 
async function AdminLogIn(req, res){
    try {
        const {UserName, Password} = req.body;

        if (!(UserName && Password)){
            res.status(400).send("All input required");
        }

        const admin_user = await Credentials.findOne({UserName:UserName});

        const admin_password = admin_user.Password;
        //if (admin_user && (await compare(Password, admin_user.Password)))
        if(admin_user && (Password == admin_password ))
        //if (admin_user && (await compare(Password,admin_password)))
    {
            
        const AD_searchID = admin_user.ShopID;
        // res.send({ShopID: admin_user.ShopID});
        if (AD_searchID == process.env.ADMINID){
            //local storage 
            res.send({
                "ShopID": AD_searchID,
                "Role":"Admin"
            })
    
        }
        }else{
            return res.status(400).send("Invalid credentials");
        }   
    }
    catch (err) {
        console.log(err)
    }
}


//SHOP MANAGER LOGIN
async function ShopManLogIn(req, res){
    try {
        const {UserName, Password} = req.body;

        if (!(UserName && Password)){
            res.status(400).send("All input required");
        }

        const shopman_user = await Credentials.findOne({UserName:UserName});

        const shopman_password = shopman_user.Password;

        if(shopman_user && (Password == shopman_password )) {
            
        const SM_searchID = shopman_user.ShopID;
        //res.send({ShopID: shopman_user.ShopID});
        //console.log(SM_searchID)

        //local storage 
        res.send({
            "ShopID":SM_searchID,
            "Role":"Shop Manager"
        })
            

        }else{
            return res.status(400).send("Invalid credentials");
        }   
    }
    catch (err) {
        console.log(err)
    }
}
module.exports = {AdminLogIn, ShopManLogIn}