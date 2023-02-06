// Imports from packages
const express = require("express");
const mongoose = require('mongoose');


//initialize
const PORT = 3001;
const app = express();
const DB = "mongodb+srv://ozeks23:4156@cluster0.e55cxhu.mongodb.net/?retryWrites=true&w=majority"


//import from other files
const authRouter = require("./routes/auth.js");

//middleware
app.use(express.json());
app.use(authRouter);

// connections
mongoose.connect(DB).then(() => {
    console.log('Connection Successful');
}).catch ((e) => {
    console.log(e)
});


app.listen(PORT, "0.0.0.0", () => {
    console.log(`Connected at port number ${PORT}`)
});
//LOCALHOST
