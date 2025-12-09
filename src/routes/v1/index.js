const express=require('express');
const v1Router=express.Router();

v1Router.get("/",(request,response)=>{
    return response.send("hello from v1")

})
module.exports=v1Router;