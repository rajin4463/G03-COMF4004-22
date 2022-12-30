const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

const connectDB = (dburi) => {
    mongoose.connect(dburi, {useNewUrlParser: true, useUnifiedTopology: true});
}
module.exports = connectDB;