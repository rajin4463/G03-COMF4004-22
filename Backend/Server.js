require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, listing)

function listing(){
    console.log(`server listing on port ${PORT}`);
}

app.get('/', home)

function home(request, response){
    response.send('<h1> Mall51 API endpoint</h1>')
}