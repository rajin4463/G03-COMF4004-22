const express = require('express');
const cors = require('cors');
const bodyPraser = require('body-parser');
const connectDB = require('./dbconnect');
const ShopDashRoutes = require('./routes/shopDashRoute');
require('dotenv').config();
const app = express();

const PORT = 3000

app.use(cors({
    origin: '*',
    methods: ['POST', 'GET', 'PATCH']
}));

const start = async () =>{
    try{
        await connectDB(process.env.URI)
    }
    catch(err){
        console.log(err);
    }
};

start();

console.log('Server starting.....');

app.use(bodyPraser.urlencoded({extended: false}));
app.use(bodyPraser.json());

//Routes
app.use('/shopdash', ShopDashRoutes);

app.listen(PORT)

app.get('/', (request, response) => {
    response.send('<body style = "background-color: rgba(0, 0, 0, 0.82); color:antiquewhite; padding:2%;"><h1> MALL51 API endpoint</h1></body>')
});