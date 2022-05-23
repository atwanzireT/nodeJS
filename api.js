const express = require("express");
const app = express();
const { products } = require('./data');
// app.use(express.static('./static'));

app.get('/',(req, res) => {
    res.send("<div><h1>Go to APIs </h1><a href='/api/products/'>Products</a></div>")
})

app.get('/api/products/', (req, res) =>{
    res.send(products);
    console.log(products);
})

app.listen(5000, () => {
    console.log("Listening At http://127.0.0.1:5000/ ...");
});