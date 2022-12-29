const { request, response } = require('express');
const express = require('express');
const bodyPraser = require('body-parser');
const controler = require('./controler');
const path = require('path');
const app = express();

PORT = 3000

console.log('Server starting.....');

app.use(bodyPraser.urlencoded({extended: false}));
app.use(bodyPraser.json());

app.listen(PORT, listining)

function listining(request, response){
    console.log('Listining....');
}

app.get('/', (request, response) => {
    response.send('<body style = "background-color: rgba(0, 0, 0, 0.82); color:antiquewhite; padding:2%;"><h1> MALL51 API endpoint</h1></body>')
});

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

app.get('/home', (req, res) => {
    const homePage = path.resolve(__dirname, '../Mall51/home.html');
    res.sendFile(homePage);
})

// controler.createShop("Adidas", 2075, "Fashion", "2st Floor", false);