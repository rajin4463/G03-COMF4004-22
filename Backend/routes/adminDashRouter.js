const express = require('express');
const admincontroller = require('../controllers/admincontroller');

const router = express.Router();

try{
    router.post('/userDetails', admincontroller.usrDetails);
}
catch(err){
    console.log(err);
}

try{
    router.patch('/shopDetails', admincontroller.shopDetails);
}
catch(err){
    console.log(err);
}

module.exports = router;