const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

const app = express();
dotenv.config({path: './config/config.env'});
connectDB();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

if(process.env.NODE_ENV === 'developement'){
    app.use(morgan('dev'));
}



const transactions = require('./routes/transactions');
const { dirname } = require('path');
app.use('/api/v1/transactions', transactions);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(--dirname, 'client', 'build', 'index.html')));
}



const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));