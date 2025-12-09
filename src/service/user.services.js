const {createuser,finduser} =require('../repository/user.repo')


async function createuserservice(response){
    try {
        console.log("the requestbody is ",response)
        const user=await createuser(response);
        return user;
    } catch (error) {
        console.log(error)
    }
}


module.exports={
    createuserservice
}