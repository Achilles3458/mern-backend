const mongoose = require('mongoose')
const express = require('express');
const app = express();
const port = 3000;

const DB = 'mongodb+srv://elu:Aelaf007@cluster0.ohaj8yc.mongodb.net/mernstack?retryWrites=true&w=majority';
mongoose.connect(DB).then(() =>{
    console.log(`connection successful`)
}).catch((err) =>console.log(`error in connection`));
// {
//     useNewUrlParser: true,
//     userCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// } if showing deprication warning

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

app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
})