const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const mongodb =  `mongodb://Akshay:akshay@cluster0-shard-00-00.xtrsg.mongodb.net:27017,cluster0-shard-00-01.xtrsg.mongodb.net:27017,cluster0-shard-00-02.xtrsg.mongodb.net:27017/prac?authSource=admin&replicaSet=atlas-r52gk2-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`

let PORT = process.env.PORT||5000

var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));

mongoose.connect(mongodb,{useNewUrlParser: true,  useUnifiedTopology: true  }).
then(()=>{console.log("connected to DB")}).
catch(err=>console.log(err))

app.use(express.json())

const authRoutes = require("./routes/auth");

app.use(authRoutes);

app.listen(PORT,()=>{
    console.log("server is running at"+ " " +PORT)
})

app.get("/",(req,res)=>{
    res.send("home")
})