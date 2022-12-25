require('dotenv').config();
const Shop = require('./models/shopMan');
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
    console.log(request);
    const addres = new Shop({
        imageID: request.imgID,
        image: request.img,
        ShopID: request.shID
    });

    addres.save();
}

function find(id){

}

module.exports = {add, find};