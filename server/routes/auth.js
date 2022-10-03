const express = require("express");
const router = express.Router()
const User = require("../models/Users")
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken')
const verify = require("../verifyToken")


router.post("/register",async (req,res)=>{
    // console.log(req.body);
    let checkPwd = /^[0-9a-zA-Z-@]+$/;
    if (req.body.password && req.body.password.length > 5 && req.body.password.match(checkPwd)) {
        const newUser = new User({
         email: req.body.email,
         password: req.body.password,
        }) 
        try {
            const user = await newUser.save()
            // console.log(user);
            const accessToken = jwt.sign(
                { id: user._id},
                '333333333',
                { expiresIn: "5d" }
            )
            const { password, ...info } = user._doc
            const data = { ...info, accessToken }
            // console.log(data)
            res.status(200).json(data)
        

        } catch (error) {
            if(error.code === 11000){
                res.status(409).json("email or username already registered")
            } else {
                res.status(500).json("please enter all the details properly")
            }
        }

    }  else {
        res.status(500).json("Password should be of min length 6 and lower case ,should contain only alphabets, numbers and special characters (@ and hyphen)")
    }
})

//LOGIN

router.post('/login', async (req, res) => {
    try {
        console.log(req.body);
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(401).json('wrong email or password')
            
        } else {

            if (user.password !== req.body.password) {
                res.status(401).json('wrong email or password')
            } else {
                const accessToken = jwt.sign(
                    { id: user._id },
                    "333333333",
                    { expiresIn: "5d" }
                )
                const { password, ...info } = user._doc
                const data = { ...info, accessToken }
                res.status(200).json(data)
               
                // res.status(200).json({ ...info, accessToken })
            }
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/verifyUser', verify, async (req, res) => {
    // console.log("---auth---")
    console.log(req.user)
    if (req.user) {
        try {
            // console.log(req.user)
            const user = await User.findById(req.user.id)
            res.status(200).json(user)
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }

    } else {
        res.status(404).send("no token")
        console.log("no token")
    }
})

// UPDATE

router.patch('/update/:id',verify,(req,res)=>{
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((user) => {
        if (!user) {
            return res.status(404).send();
        }
        res.status(200).send(user);
    }).catch((error) => {
        res.status(500).send(error);
    })
})

module.exports = router;