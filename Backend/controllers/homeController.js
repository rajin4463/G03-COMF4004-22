const ShopDetails = require('../models/shop');

exports.shop_details_get = (req, res) => {
    res.send('<body style = "background-color: rgba(0, 0, 0, 0.82); color:antiquewhite; padding:2%;"><h1> MALL51 Home Page</h1></body>');
    ShopDetails.find({}, function(error, details){
        if(error){
            console.log(error);
        }
        else{
            console.log({allDetails: details[0].shopname})
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