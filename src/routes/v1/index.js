const express=require('express');
const { createusercontroller,createuserlogin } = require('../../controller/user.controller');
const authmiddleware = require('../../middleware/auth.middleware');
const { createBookingcontroller } = require('../../controller/booking.controller');
const {updatelocationofdriver} = require('../../service/updatedriverlocation.service');
const v1Router=express.Router();

v1Router.get("/",(request,response)=>{
    return response.send("hello from v1")

})

v1Router.post("/create",createusercontroller)
v1Router.post("/login",createuserlogin)
// v1Router.get("/server",authmiddleware,async (request,response)=>{
//     console.log("hii from guarded server api")
//     response.send("hii from guarded server api")

// })
v1Router.post("/booking",authmiddleware,createBookingcontroller)
v1Router.post("/driver",authmiddleware,updatelocationofdriver)
module.exports=v1Router;