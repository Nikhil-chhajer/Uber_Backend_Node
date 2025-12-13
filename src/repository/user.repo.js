const User=require('../models/user.model');


async function createuser(response){
    try {
        
        const user=await User.create(response);
        return user;
    } catch (error) {
        console.log(error);

    }
}

async function finduser(email){
    try {
        const user= await User.findOne({
            email:email
        });
        if(!user){
            return null;
        }
        return user;
    } catch (error) {
        console.log(error);
        
    }
}
async function finduserandupdate(userId,updatedata){
    try {
        const user= await User.findOneAndUpdate(userId,updatedata)
        if(!user){
            return null;
        }
        return user;
    } catch (error) {
        console.log(error);
        
    }
}
module.exports={
    createuser,finduser,finduserandupdate
}