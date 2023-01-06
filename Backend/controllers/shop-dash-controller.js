const ShopImg = require('../models/shopImg');
const Shop = require('../models/Shopdetails');

async function add(req, res){
    const {ImgID, img, ShopID} = req.body;
    let numID = Number(ShopID)
    try{
        const update = await ShopImg.findOneAndUpdate({ShopID: numID}, {
            imageID:ImgID,
            image: img
        },  { upsert: true, new: true }, )
        res.send({status: "Success!"})
    }
    catch(err){
        console.log(err);
        res.send({status: "Failed!"})
    }
}

async function find(req, res){
    let {id} = req.params
    let numID = Number(id)
    try{
        const SHOP = await Shop.findOne({ShopID: numID})
        if(!SHOP == null || !SHOP == []){
            res.send(SHOP)
        }
        else{
            res.send({ status : "data not found"})
        }
    }
    catch(err){
        console.log(err);
    }
}
  

async function update(req, res){
    try{
        const {ShopID, ShopName, Location, Category, Discounts} = req.body
        const update = await Shop.findOneAndUpdate({ShopID: ShopID}, req.body)
        res.send({ status : "data saved"})
    }
    catch(err){
        console.log(err);
        res.send({ status : "data not saved"})
    }
}
module.exports = {add, find, update}