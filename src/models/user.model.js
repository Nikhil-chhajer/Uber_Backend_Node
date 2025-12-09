const mongoose =require("mongoose")
//const {Schema}=mongoose  <- alternative way if we dont want to use mongoose.Schema 
const bcrypt = require('bcrypt');
const saltRounds = 10;


const userSchema=new mongoose.Schema({
    // email:String,
    // password:String,
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum:["User","Driver"],
        default:"User"
    },
    location:{
        type:{
            type:String,
            enum:['Point'],
            default:'Point'
        },
        coordinates:{

            type:[Number],
            default:[0,0]
        }
    }


});
userSchema.pre('save',async function hashpassword(){

    const hashedpassword=await bcrypt.hash(this.password, saltRounds);
    this.password=hashedpassword;

})
const User=mongoose.model("User",userSchema)


module.exports=User;