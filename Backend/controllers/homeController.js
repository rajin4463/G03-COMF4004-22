const ShopDetails = require('../models/Shopdetails');

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