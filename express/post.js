var express = require("express");
var {people} = require('./data.js');
var app = express();

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.status(200).json({success:true, data : people })
})

app.post('/login', (req, res) => {
    const { name } = req.body;
    console.log(name);
    if (name){
        res.status(200).send(`Welcome ${name} !`);
    }
    res.status(401).send("Please Provide Credientials ...");
    res.send("Post")
})

app.listen(5000, () => {
    console.log("Connected ...");
})