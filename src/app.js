const express = require('express');
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config();


// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// DataBase
const dbConnect = require('./loader/db')

// Routs
app.use(require('./routes/routs.router'));

module.exports = app;