const ShopDetails = require('../models/Shopdetails');
const ShopImage = require('../models/shopImg');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

exports.shop_details_get = (req, res) => {
    res.send('<body style = "background-color: rgba(0, 0, 0, 0.82); color:antiquewhite; padding:2%;"><h1> MALL51 Home Page</h1></body>');
    ShopDetails.find({}, function(error, details){
        if(error){
            console.log(error);
        }
        else{
            console.log({shopDetails: details[0].shopname});
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

let imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + '-', Date.now())
    }
});

let upload = multer({storage: imageStorage});

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