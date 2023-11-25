
const express=require('express')
const cors=require('cors')
const { express1 } = require('./dummydata')
const app=express()

app.use(cors({
    origin:"*"
}))
app.get("/",(req,res)=>{
    res.send("home")
})
// app.use("/api",data)
app.use("/api",express1)

app.listen(3030,()=>{
    try{
        console.log("server running in 3500")
    }
    catch(err){
        console.log(err,"error")
    }
    
})