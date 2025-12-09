const express=require('express');
const { createusercontroller,createuserlogin } = require('../../controller/user.controller');
const v1Router=express.Router();

v1Router.get("/",(request,response)=>{
    return response.send("hello from v1")

})

v1Router.post("/create",createusercontroller)
v1Router.post("/login",createuserlogin)
module.exports=v1Router;