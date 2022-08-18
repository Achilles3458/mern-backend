const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn');
// const User  = require('./model/userSchema');

const PORT = process.env.PORT;


// if showing deprication warning
// {
//     useNewUrlParser: true,
//     userCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// } 

// Middleware 

const middleware = (req,res,next) =>{
    console.log(`my middle ware`);
    next();
}


app.get('/',(req,res)=>{
    res.send(`Hello World, this is elaf a MERN Stack developer`);
});
app.get('/about', middleware, (req,res)=>{
    res.send(`Hello World, this is elaf a MERN Stack dev, and this is my about section`);
});
app.get('/contact', (req,res)=>{
    res.send(`Hello World, this is elaf a MERN Stack dev, contact me`);
});
app.get('/signin', (req,res)=>{
    res.send(`Hello World, this is elaf a MERN Stack dev, login/signin page`);
});
app.get('/signup', (req,res)=>{
    res.send(`Hello World, this is elaf a MERN Stack dev, signup page`);
});

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)
})