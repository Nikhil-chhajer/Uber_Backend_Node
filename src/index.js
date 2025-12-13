const express=require('express');
const v1Router = require('./routes/v1');
const connect =require('../src/config/db.config')
const {initRedis} =require('../src/config/redis.config')
const{findnearbydriver}=require('../src/service/updatedriverlocation.service')
const app=express();
const {PORT}=require("../src/config/server.config")

const cors=require('cors')
app.use(cors());
app.use(express.json());
app.use("/api/v1",v1Router)




//app.listen ke parameter mein woh port no hai wahi server start hota hai  agar arg mein port=3000 then server start at const PORT=3100 but server 3000 psrt chalta hai 
// doesnt matter ki console pe print hota ki server started at 3100 woh sirf PORT ki value print karta hai na ki asli port ki 
//below is the example of such cases:
// app.listen(3000,()=>{
//     console.log("The server started at ",PORT);
// })


app.listen(PORT,async ()=>{
    console.log(`The server started at ${PORT}`);
    await connect();
    console.log("Mongo connected");
    await initRedis();

    // const response=await findnearbydriver( -123.41939896345139,30.774899994483164);
    // console.log("the response is",response)

})



