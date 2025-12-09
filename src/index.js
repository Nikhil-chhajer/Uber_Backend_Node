const express=require('express');
const v1Router = require('./routes/v1');
const User =require('../src/models/user.model');
const connect =require('../src/config/db.config')

const app=express();
const PORT=3100;

app.use(express.json());
app.use("/api/v1",v1Router)



//app.listen ke parameter mein woh port no hai wahi server start hota hai  agar arg mein port=3000 then server start at const PORT=3100 but server 3000 psrt chalta hai 
// doesnt matter ki console pe print hota ki server started at 3100 woh sirf PORT ki value print karta hai na ki asli port ki 
//below is the example of such cases:
// app.listen(3000,()=>{
//     console.log("The server started at ",PORT);
// })

app.listen(PORT,async ()=>{
    console.log("The server started at ",PORT);
    await connect()
    
    const user=await User.create({
    "email":"dummy@test.com",
    "password":"1346545",
    "role":"User",
    "location":{
         "coordinates":[77.12345, 28.54321]
    }

})
console.log(user)
    
})



