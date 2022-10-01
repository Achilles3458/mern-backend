const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");
const cookieParser = require("cookie-parser");

require('../db/conn');
const User = require("../model/userSchema");


// Using promises

// router.post('/register', (req,res) =>{
//     const {name, email, phone, work, password, cpassword} = req.body;

//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error:"Please fill the form"});
//     }

//     User.findOne({email:email})
//     .then((userExist) => {
//         if(userExist){
//             return res.status(422).json({error:"Email already exist"});
//         }

//         const user = new User({name, email, phone, work, password, cpassword});

//         user.save().then(() =>{
//             res.status(201).json({message: "User registered successfully"});
//         }).catch((err) => res.status(500).json({error: "Registration failed"}));
//     }).catch(err =>{console.log(err)});

// });

// Using async await

router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill the form properly" });
    }
    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Passwords are not matching" });
        } else {

            const user = new User({ name, email, phone, work, password, cpassword });
            // Before saving the registration details we will hash the codes
            await user.save();
            return res.status(201).json({ message: "User registered successfully" });
        }

    } catch (err) {
        console.log(err);
    }

});

// login route

router.post('/signin', async (req, res) => {
    // console.log(req.body);
    // res.json({message: "awesome"});
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the data" })
        }
        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credientials" });
            } else {
                res.json({ message: "User SignIn successfully" })
            }
        } else {
            res.status(400).json({ error: "Invalid Credientials" });
        }


    } catch (err) {
        console.log(err);
    }
})

// Very important as we use cookie parser otherwise it won't work
router.use(cookieParser());

// About us page
router.get('/about', authenticate, (req, res) => {
    // console.log(`Hello World, this is elaf a MERN Stack dev, and this is my about section`);
    res.send(req.rootUser);
});


// Get user data for contact us and home page

router.get('/getdata', authenticate, (req, res) => {
    res.send(req.rootUser);
});


// Contact Us page
router.post('/contact', authenticate, async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        if (!name || !email || !phone || !message) {
            console.log("Error in contact form")
            return res.json({ error: "Please fill the contact form" });
        }

        const userContact = await User.findOne({ _id: req.userID });

        if(userContact){
            const userMessage = await userContact.addMessage(name, email, phone, message);
            await userContact.save();
            res.status(201).json({message:"User contact successfully"})
        }
    } catch (error) {
        console.log(error);
    }
});

// Logout page
router.get('/logout', (req, res) => {
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send('User Logout');
});


module.exports = router;