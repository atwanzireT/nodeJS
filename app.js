var express = require('express');
var app = express()
var mongoose = require("mongoose");
require('dotenv/config');

// import Routes
const postsRoute = require('./Routes/posts');
// app.use('/', postsRoute);

// connect to database
var mongodb = 'mongodb://localhost:27017/mydb';
mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true});


var db = mongoose.connection();

db.on('error', console.error.bind(console, "MongoDB connection Error: "));
// port = process.env.PORT;
app.listen(5000);