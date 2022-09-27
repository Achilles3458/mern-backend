const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn');
// const User  = require('./model/userSchema');

app.use(express.json());

// To link router files we need this middleware
app.use(require('./router/auth'));

const PORT = process.env.PORT;

// app.get('/contact', (req,res)=>{
//     res.send(`Hello World, this is elaf a MERN Stack dev, contact me`);
// });
app.get('/signin', (req,res)=>{
    res.send(`Hello World, this is elaf a MERN Stack dev, login/signin page`);
});
app.get('/signup', (req,res)=>{
    res.send(`Hello World, this is elaf a MERN Stack dev, signup page`);
});

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)
})