const {createuser,finduser} =require('../repository/user.repo')
const jwt=require('jsonwebtoken')
const {JWT_SECRET_KEY}=require("../config/server.cofig")
const bcrypt=require('bcrypt')
async function createuserservice(response){
    try {
        console.log("the requestbody is ",response)
        const user=await createuser(response);
        return user;
    } catch (error) {
        console.log(error)
    }
}

async function login(email,password){
    try {
        const user=await finduser(email);
        if(user==null){
            return "No user found";
        }
        //check for password
        const ispasswordmatch=await comparepassword(user.password,password);
        if(!ispasswordmatch){
            return "Enter correct password";
        }
        const generatedtoken=generatejwttoken(user._id);
        return generatedtoken;


    } catch (error) {
        console.log(error)
        
    }
}
async function comparepassword(hashedpassword,plaintextpassword){
   return bcrypt.compareSync(plaintextpassword, hashedpassword);
}
async function generatejwttoken(userId){
    const token=jwt.sign({
        userId:userId,

    },JWT_SECRET_KEY,{expiresIn:'1h'})
    return token;

}

module.exports={
    createuserservice,login
}