const express = require('express');
const cors = require('cors');
const bodyPraser = require('body-parser')
const shopCont = require('./shop-dash-controller');
const app = express();

const PORT = 3000

app.use(cors({
    origin: '*',
    methods: ['POST', 'GET', 'PATCH']
}));

console.log('Server starting.....');

app.use(bodyPraser.urlencoded({extended: false}));
app.use(bodyPraser.json());

app.listen(PORT)

app.get('/', (request, response) => {
    response.send('<body style = "background-color: rgba(0, 0, 0, 0.82); color:antiquewhite; padding:2%;"><h1> MALL51 API endpoint</h1></body>')
});

app.post('/add-img', shopCont.add);

app.get('/get-shop-data/:id', shopCont.find)

app.patch('/update/:id', shopCont.update)