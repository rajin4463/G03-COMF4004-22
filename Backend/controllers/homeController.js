const ShopDetails = require('../models/Shopdetails');
const ShopImage = require('../models/shopImg');

exports.shop_img_get = (req, res) => {
    // res.send('<body style = "background-color: rgba(0, 0, 0, 0.82); color:antiquewhite; padding:2%;"><h1> MALL51 Home Page</h1></body>');
    try{
        ShopImage.find({}, (error, item) => {
            if(error){
                console.log(error);
                res.status(500).console.log('An error occured', error);
            }
            else{
                res.send(item)
            }
        })
    }catch(err){
        console.log(err);
    }
}

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
