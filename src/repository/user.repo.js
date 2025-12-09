const User=require('../models/user.model');


async function createuser(response){
    try {
        const user=await User.create(response);
        return user;
    } catch (error) {
        console.log(error);

    }
}

async function finduser(userId){
    try {
        const user= await User.findById(userId);
        if(!user){
            return false;
        }
        return true;
    } catch (error) {
        console.log(error);
        
    }
}

module.exports={
    createuser,finduser
}