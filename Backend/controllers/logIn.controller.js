const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
const bodyPraser = require('body-parser');

app.use(bodyPraser.urlencoded({extended: false}));
app.use(bodyPraser.json());

const path = require('path');
const Credentials = require('./models/credentials');
require ('dotenv').config({ path: path.resolve(__dirname, './.env')});

const dburi = process.env.URI

mongoose.connect(dburi, {useNewUrlParser: true, useUnifiedTopology: true})
 .then((result)=>{
    console.log('connected to db...');
 }).catch((err)=>{
    console.log(err);
})



//ADMIN MANAGER LOGIN 
async function AdminLogIn(req, res){
    try {
        const {UserName, Password} = req.body;

        if (!(UserName && Password)){
            res.status(400).send("All input required");
        }

        const admin_user = await Credentials.findOne({UserName:UserName});

        if (admin_user && (await compare(Password, admin_user.Password))) {
            
        const AD_searchID = ({ShopID: admin_user.ShopID});
        res.send({ShopID: admin_user.ShopID});
        if (AD_searchID == ADMINID){
            //local storage 
            localStorage.setItem("SHOPID", "9978")
            localStorage.setItem("Role", "Admin")
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

        if (shopman_user && (await compare(Password, shopman.Password))) {
            
        const SM_searchID = ({ShopID: shopman_user.ShopID});
        res.send({ShopID: shopman_user.ShopID});
        console.log(SM_searchID)

        //local storage 
        localStorage.setItem("ShopID", SM_searchID)
        localStorage.setItem("Role", "ShopMan")
            

        }else{
            return res.status(400).send("Invalid credentials");
        }   
    }
    catch (err) {
        console.log(err)
    }
}



//TRIGGER BUTTONS 
//adminLogIn shopManLogIn 

document.getElementById("adminLogIn").onsubmit = async function() {AdminLogIn()};
document.getElementById("shopManLogIn").onsubmit = async function() {ShopManLogIn()};