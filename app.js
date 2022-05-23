var express = require('express');
var app = express()
var mongoose = require("mongoose");
var path = require("path");
require('dotenv/config');

// setting static
app.use(express.static("./static"));


app.get('/', (req, res) =>{
})

app.get('/about', (req, res) =>{
    res.send("About Page");
})

app.all('*', (req, res) =>{
    res.status(404).send('<h1>Request Not Found</h1>');
})

// connect to database
var mongodb = 'mongodb://localhost:27017/mydb';


// port = process.env.PORT;
app.listen(5000);