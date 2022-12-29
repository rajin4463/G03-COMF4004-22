const express = require('express');
const cors = require('cors');
const bodyPraser = require('body-parser')
const controler = require('./controler');
const app = express();

const PORT = 3000

app.use(cors({
    origin: '*'
}));  

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

app.post('/add-img', (request,response) =>{
    try{
        controler.add(request.body);
        response.status(200).json({action:"Success!"})
    }
    catch(err){
        console.log(err);
        response.status(401).json({action:"Failed!"});
    }
});

app.get('/get-shop-data/:id', (request,response)=>{
    response.status(200)
    controler.find(request.params.id)
    .then(result => {
      response.send(result);
    });

})