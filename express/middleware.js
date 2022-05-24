const express = require('express');
const app = express();

// req  => middleware => res
const logger = (req, res, next) => {
    const url = req.url;
    const method = req.method;
    const time = new Date().getFullYear();
    console.log(url, method, time)
    res.send("Testing ...");
    next();
}
app.get('/', logger, (req, res) => {
    res.send("<div><h1>Home Page ...</h1><a href = '/about/'>About</a></div>");
})

app.get('/about/', logger , (req, res) => {
    res.send("About ... ")
})

app.listen(5000, () => {
    console.log("Running Middleware ...");
});