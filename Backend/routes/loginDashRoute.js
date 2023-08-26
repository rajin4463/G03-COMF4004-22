const express = require('express');
const loginCont = require('../controllers/logIn.controller');

const router = express.Router();

try{
    router.post('/shopLogIn', loginCont.ShopManLogIn);
}
catch(err){
    console.log(err);
}

try{
    router.post('/adminLogIn', loginCont.AdminLogIn);
}
catch(err){
    console.log(err);
}

module.exports = router;