require('./db/connect');
const express = require("express");
const app = express();
const tasks = require("./Routes/tasks");

// middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send("Hello World");
})

app.use('/api/v1/tasks', tasks);


// const port = 5000;
app.listen(5000, () => {
    console.log("Connected ...")
});