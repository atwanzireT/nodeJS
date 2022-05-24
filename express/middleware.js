const express = require('express');
const app = express();
const logger = require('./logger');

// req  => middleware => res
app.use(logger);

app.get('/', (req, res) => {
    res.send("<div><h1>Home Page ...</h1><a href = '/about/'>About</a></div>");
})

app.get('/about/', (req, res) => {
    res.send("About ... ")
})

app.listen(5000, () => {
    console.log("Running Middleware ...");
});