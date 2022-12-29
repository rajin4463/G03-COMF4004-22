require('dotenv').config();
const ShopMan = require('./models/shopImg');
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

function add(request){
    const addres = new ShopMan({
        imageID: request.imgID,
        image: request.img,
        ShopID: request.shID
    });
    try{
        addres.save();
    }
    catch(err){
        console.log(err);
    }
}

let objData;

async function find(id){
    await Shop.findOne({_id: id})
        .then(data => {
            objData = data;
        })
    return(objData);
}

module.exports = {add, find};