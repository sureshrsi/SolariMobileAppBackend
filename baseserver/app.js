require('dotenv').config({path: `${process.cwd()}/.env`})

const express = require('express')

const authRoute = require('./routes/auth.route');
const cors = require("cors");

const generalRoute = require('./routes/generalinfo.route');


const app = express()

app.use(express.json());

var corsOptions = {
    origin : "http://localhost:8100"
};

app.use(cors(corsOptions));

app.get('/',(req,res) =>{
    res.status(200).json({
        status : 'success',
        message : 'api working'
    });
});



app.use('*',(req,res) => {
    res.status(404).json({
        status : 'Fail',
        message : 'Route not found'
    })
})

const PORT = process.env.APP_PORT || 4000


app.listen(PORT ,() =>{
    console.log(`server up and running..${PORT}`)
})