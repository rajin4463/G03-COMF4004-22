const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

//connection function that is intialised by the server.js
const connectDB = (dburi) => {
    mongoose.connect(dburi, {useNewUrlParser: true, useUnifiedTopology: true});
}
module.exports = connectDB;