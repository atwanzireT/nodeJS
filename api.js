const express = require("express");
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
    console.log(newProduct);
})

// getting single product
app.get('/api/products/1', (req,res)=>{
    const singleProduct = products.find((product) => product.id === 1)
    res.json(singleProduct);
})

app.listen(5000, () => {
    console.log("Listening At http://127.0.0.1:5000/ ...");
});