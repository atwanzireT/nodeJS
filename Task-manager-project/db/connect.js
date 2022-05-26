const mongoose = require("mongoose");
const connectString = "mongodb://localhost:27017/task-manager";
mongoose.connect(connectString, {useNewUrlParser : true, useCreateIndex:true, useFindAndModify:false, useUnifiedTopology:true}).then(() => {
    console.log("Database Connection Created ...");
}).catch((err) => {
    console.log(err);
});