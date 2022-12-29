const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './database.env')});
const Shop = require('./models/shop');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

const dburi = process.env.URI
mongoose.connect(dburi, {useNewUrlParser: true, useUnifiedTopology: true})
 .then((result)=>{
    console.log('connected to db...');
 }).catch((err)=>{
    console.log(err);
 })

/*function add(request){
    console.log(request);
    const addres = new Shop({
        imageID: request.imgID,
        image: request.img,
        ShopID: request.shID
});

    addres.save();
}
*/

function createShop(shopname, shopID, categories, location, discounts){
    shopDetail = {
        shopname: shopname,
        shopID: shopID,
        categories: categories,
        location: location,
        discounts: discounts
    }
    let shop = new Shop(shopDetail);
    shop.save(function(error){
        if(error){
            console.log(error)
        }
        console.log("Shop added");
        
    });
}

function find(id){

}

module.exports = {find, createShop};