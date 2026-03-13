const express = require('express');
const mongoose = require('mongoose');
const connectDB=require('./config/db');
require('dotenv').config();
const urlRoutes = require('./routes/urlRoutes');
const { handleUserSignUP,handleUserLogin } = require('./controllers/userControllers');



const port=process.env.PORT ||3000;
const app = express();

connectDB();



app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.set('view engine','ejs');




app.get("/",(req,res)=>{
    res.render('home',{shortUrl:null,error:null})
    // res.json({m:'This is the end'})
})
app.get('/signup',  (req, res) => res.render('signup', { error: null, success: null }))
app.post('/signup', handleUserSignUP)  
app.get('/login',  (req, res) => res.render('login', { error: null, success: null }))
app.post('/login', handleUserLogin) 



app.use('/shorten',urlRoutes)




app.listen(port , ()=>{
    console.log(`Server is running at ${port}`)
    console.log(`http://localhost:${port}/`)
})