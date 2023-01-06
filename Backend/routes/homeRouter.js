const express = require('express');
const router = express.Router();

const home_controller = require('../controllers/homeController');

try{
    router.get('/', home_controller.shop_details_get);
}catch(err){
    console.log(err);
}

try{
    router.get('/img', home_controller.shop_img_get)
}catch(err){
    console.log(err);
}

try{
    router.get('/search', home_controller.shop_search_get)
}catch(err){
    console.log(err);
}
module.exports = router;