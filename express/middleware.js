const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require("morgan");

// req  => middleware => res

//  1: use vs route
//  2: Options -Our own / express / third Party
// app.use([logger, authorize]);
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send("<div><h1>Home Page ...</h1><a href = '/about/'>About</a></div>");
})

app.get('/about/', (req, res) => {
    res.send("About ... ")
})

app.listen(5000, () => {
    console.log("Running Middleware ...");
});