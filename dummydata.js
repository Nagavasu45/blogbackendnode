const { bolly } = require('./completedata');

const express1=require('express').Router();
express1.get("/backenddata",(req,res)=>{
    return res.send(bolly)
})
module.exports={express1}