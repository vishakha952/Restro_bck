const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const nodemon = require("nodemon");
const connectDB = require("./config/db");
const rootroute = require("./routes/rootroute");
const restroroute = require("./routes/restroroute");
const cartroute = require("./routes/cartroute");
const contactusroute = require("./routes/contactusroute");
const aboutusroute = require("./routes/aboutusroute");




const PORT = process.env.PORT || 7001 || 7002;
const app = express();

const path = require("path");
// app.use(express.static(path.resolve(__dirname,'./public')))
// app.get('/home',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"./public","index.html"));
// })
app.use(express.static(path.join(__dirname, 'public')));
app.use('/',rootroute);
app.use('/',restroroute);
app.use('/',cartroute);
app.use('/',contactusroute);
app.use('/',aboutusroute);


connectDB();

app.listen(PORT,()=>{
    console.log(`Server is running on https://localhost:${PORT}`.bgGreen.white);
})


