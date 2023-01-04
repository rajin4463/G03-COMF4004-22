require('dotenv').config();
const jwt = require('jsonwebtoken');

async function adminAuth(req, res){
    const {token} = req.body;
    // const key = (token)
    try{
        await jwt.verify(token, process.env.ADMIN_ACCESS_TOKEN)
        res.send({status:'ok'});

    }
    catch(err){
        res.send({status:null});
    }
}

async function shopAuth(req, res){
    const {token} = req.body;
    // const key = (token)
    try{
        await jwt.verify(token, process.env.MANAGER_ACCESS_TOKEN)
        res.send({status:'ok'});

    }
    catch(err){
        res.send({status:null});
    }
}
module.exports = {adminAuth, shopAuth};