const express = require('express');
const app = express();
const ip= require('ip');


app.get('/ping',(req,res)=>{
    return res.json({
        message:'pong',
        serverAddress:ip.address()
    })
});

app.listen(3000,()=>{
    console.log("SServer is running on port 3000");
});