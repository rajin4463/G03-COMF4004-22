const ShopDetails = require('../models/Shopdetails');
const ShopImage = require('../models/shopImg');

exports.shop_img_get = async (req, res) => {
    // res.send('<body style = "background-color: rgba(0, 0, 0, 0.82); color:antiquewhite; padding:2%;"><h1> MALL51 Home Page</h1></body>');
    let {imgID} = req.params
    let numID = Number(imgID)
    try{
        const SHOP = await ShopImage.findOne({imageID: numID})
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
                ShopDetailsArray.push({ShopID:details[i].ShopID, ShopName: details[i].ShopName, ShopLocation: details[i].Location, Discount: details[i].Discounts, Category:details[i].Category})
            }
            res.json(ShopDetailsArray);
            
        }
    })
}

// Search Function

exports.shop_search_get = (req, res) => {
    const searchType = req.params[0];
    const searchValue = req.query[searchType];
    let Shops = [];
    ShopDetails.find({$or:[{ShopName: searchValue},{Category: searchValue}]}, function(error, result){
        if(error){
            console.log(error);
        }
        else{
            for(let i = 0; i < result.length; i++){
                Shops.push({ShopName: result[i].ShopName, ShopLocation: result[i].Location, Discount: result[i].Discounts, Category: result[i].Category});
            }
            res.json(Shops);
        }
    })
}
