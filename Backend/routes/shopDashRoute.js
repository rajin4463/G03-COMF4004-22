const express = require('express');
const shopCont = require('../controllers/shop-dash-controller');

const router = express.Router();

try{
    router.post('/add-img', shopCont.add);
}
catch(err){
    console.log(err);
}

try{
    router.get('/get/:id', shopCont.find);
}
catch(err){
    console.log(err);
}

try{
    router.patch('/update/:id', shopCont.update);
}
catch(err){
    console.log(err);
}

module.exports = router;