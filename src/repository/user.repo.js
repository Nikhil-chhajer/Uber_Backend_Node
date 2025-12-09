const User=require('../models/user.model');


async function create(){
    try {
        const user=await User.create();
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
