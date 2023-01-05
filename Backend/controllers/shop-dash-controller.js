const ShopImg = require('../models/shopImg');
const Shop = require('../models/Shopdetails');

async function add(req, res){
    const {ImgID, img, ShID} = req.body;
    let numID = Number(ShID)
    try{
        const update = await ShopImg.findOneAndUpdate({ShopID: numID}, {
            imageID:ImgID,
            image: img
        },  { upsert: true, new: true }, )
        res.send(update)
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
        const SHOP = await Shop.findOne({shopID: numID})
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
    let {id} = req.params
    let numID = Number(id)
    try{
        const doc = await Shop.findOne({shopID: numID});
        Object.assign(doc, req.body);
        doc.save();
        res.send({ status : "data saved"})
    }
    catch(err){
        console.log(err);
        res.send({ status : "data not saved"})
    }
}
module.exports = {add, find, update}