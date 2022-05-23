const express = require("express");
const { param } = require("express/lib/request");
const app = express();
const { products } = require('./data');
// app.use(express.static('./static'));

app.get('/',(req, res) => {
    res.send("<div><h1>Go to APIs </h1><a href='/api/products/'>Products</a></div>")
})

// getting all products
app.get('/api/products/', (req, res) =>{
    const newProduct = products.map((product) => {
        const {id, name, price, image} = product;
        return {id, name, price, image}
    })
    res.json(newProduct);
})

// getting single product
app.get('/api/products/:PdtID', (req,res)=>{
    const {PdtID} = req.params;
    console.log(req.params);
    const singleProduct = products.find((product) => product.id === Number(PdtID))

    if(!singleProduct){
        return res.status(404).send("Product Does Not Exit ...");
    }
    return res.json(singleProduct);  
})

app.get('/api/products/:pdtID/reviews/:reviewID', (req,res) =>{
    res.send("Hello World");
    console.log(req.params);
})

app.listen(5000, () => {
    console.log("Listening At http://127.0.0.1:5000/ ...");
});