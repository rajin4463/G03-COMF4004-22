const ShopDetails = require('../models/shop');
const ShopImage = require('../models/shopImg');
const multer = require('multer');
const fs = require('fs');
const path = require('path');


// Function - Get shop details

exports.shop_details_get = (req, res) => {
    let ShopDetailsArray = [];
     //res.send('<body style = "background-color: rgba(0, 0, 0, 0.82); color:antiquewhite; padding:2%;"><h1> MALL51 Home Page</h1></body>');
    ShopDetails.find({}, function(error, details){
        if(error){
            console.log(error);
        }
        else{
            for(let i = 0; i < details.length; i++){
                ShopDetailsArray.push({ShopName: details[i].shopname, ShopLocation: details[i].location, Discount: details[i].discounts})
            }
            res.json(ShopDetailsArray);
            console.log(ShopDetailsArray);
            
        }
    })
}

// Search Function

exports.shop_search_get = (req, res) => {   
    const searchType = req.params[0];
    const searchValue = req.query[searchType];
    let Shops = [];
    ShopDetails.find({$or:[{shopname: searchValue},{categories: searchValue}]}, function(error, result){
        if(error){
            console.log(error);
        }
        else{
            for(let i = 0; i < result.length; i++){
                Shops.push({ShopName: result[i].shopname, ShopLocation: result[i].location, Discount: result[i].discounts});  
            }
            res.json(Shops);
            console.log(Shops);
        }
    })
}

// Temporary function to create a shop

exports.createShop = (shopname, shopID, categories, location, discounts) => {
    shopDetail = {
        shopname: shopname,
        shopID: shopID,
        categories: categories,
        location: location,
        discounts: discounts
    }
    let shop = new ShopDetails(shopDetail);
    shop.save((error) => {
        if(error){
            console.log(error);
        }
        console.log("Shop added!")
    });
}

// Setting up image storage using Multer

let imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + '-', Date.now())
    }
});

let upload = multer({storage: imageStorage});

// Function - Get shop image

exports.shop_img_get = (req, res) => {
    res.send('<body style = "background-color: rgba(0, 0, 0, 0.82); color:antiquewhite; padding:2%;"><h1> MALL51 Images</h1></body>');
    ShopImage.find({}, (error, item) => {
        if(error){
            console.log(error);
            res.status(500).console.log('An error occured', error);
        }
        else{
            console.log({image: item})
        }
    })
}

// Function - Post shop image

exports.shop_img_post = (imageID, image, shopID)  => {
    let obj = {
        imageID: imageID,
        image: {
            data: fs.readFileSync(path.join(__filename, '/', "")),
            contentType: "image/jpeg"
        },
        shopID: shopID
    }
    let shopImage = new ShopImage(obj);
    upload.single('shopImage')
    shopImage.save((error) => {
        if(error){
            console.log(error);
        }
        else{
            console.log("Image added!")
        }
    })
}
