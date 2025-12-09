const express=require('express');
const { createusercontroller } = require('../../controller/user.controller');
const v1Router=express.Router();

v1Router.get("/",(request,response)=>{
    return response.send("hello from v1")

})

v1Router.post("/create",createusercontroller)
module.exports=v1Router;