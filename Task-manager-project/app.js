const express = require("express");
const app = express();
const tasks = require("./Routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();


// middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send("Hello World");
})

app.use('/api/v1/tasks', tasks);

const port = process.env.PORT;
const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
start();

