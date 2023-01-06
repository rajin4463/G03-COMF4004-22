const ShopDetails = require('../models/Shopdetails');
const ShopImage = require('../models/shopImg');

exports.shop_details_get = (req, res) => {
    // res.send('<body style = "background-color: rgba(0, 0, 0, 0.82); color:antiquewhite; padding:2%;"><h1> MALL51 Home Page</h1></body>');
    ShopDetails.find({}, function(error, details){
        if(error){
            console.log(error);
        }
        else{
            res.send({shopDetails: details});
        }
    })
}

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

// Search Function

exports.shop_search_get = (req, res) => {
    const {shopName} = req.params;
    ShopDetails.find({shopname: shopName}, function(error, result){
        if(error){
            console.log(error);
        }
        else{
            console.log({ShopName: result[0].shopname, ShopLocation: result[0].location});
            res.json({ShopName: result[0].shopname, ShopLocation: result[0].location});
        }
    })
}
