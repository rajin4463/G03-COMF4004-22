const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './database.env')});
const mongoose = require('mongoose');
const { request, response } = require('express');
const express = require('express');
const bodyPraser = require('body-parser');
const homeRouter = require('./routes/homeRouter');
const app = express();

// Connection to the database
mongoose.set('strictQuery', true)
const dburi = process.env.URI
mongoose.connect(dburi, {useNewUrlParser: true, useUnifiedTopology: true})
 .then((result)=>{
    console.log('Connected to database!');
}).catch((err)=>{
    console.log(err);
})

// Sending the static pages

app.use(express.static("../Mall51"));
app.use(express.static("img"));

PORT = 3000

console.log('Server starting.....');

app.use(bodyPraser.urlencoded({extended: false}));
app.use(bodyPraser.json());

// Routers
app.use('/', homeRouter);
app.use('/img', homeRouter);
app.use('/search/shopName', homeRouter);

app.listen(PORT, listining)

function listining(request, response){
    console.log('Listining....');
}
/*
app.get('/', (request, response) => {
    response.send('<body style = "background-color: rgba(0, 0, 0, 0.82); color:antiquewhite; padding:2%;"><h1> MALL51 API endpoint</h1></body>')
});
*/
/*
app.post('/add-data', (request,response) =>{
    try{
        controler.add(request.body);
        response.send({"code":200, "action":"Success!"});
    }
    catch(err){
        console.log(err);
        response.send({"code":404, "action":"Failed!"})
    }
});
*/

app.get('/home', (req, res) => {
    const homePage = path.resolve(__dirname, '../Mall51/home.html');
    res.sendFile(homePage);
})


// Create a shop

const CreateShop = require('./controllers/homeController');
/*
CreateShop.createShop("Nike", 2065, "Fashion", "1st Floor", true);
CreateShop.createShop("Gucci", 2165, "Fashion", "3rd Floor", true);
*/
/*
CreateShop.shop_img_post(3065, "C:\Users\RAZNAN\Desktop\APIIT\Group Project\G03-COMF4004-22\Backend\controllers\little_hearts.jpg", 111);
*/