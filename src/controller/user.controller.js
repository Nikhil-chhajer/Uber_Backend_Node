const {createuserservice,login} =require('../service/user.services')


async function createusercontroller(request,response) {
    try {
        console.log(request.body)
        const user=await createuserservice({
            email:request.body.email,
            password:request.body.password,
            role:request.body.role
        })
        return response.status(200).send({
            data:user
        })
    } catch (error) {
        return response.status(400).send({
            data:error
        })
    }

    
}
async function createuserlogin(request,response) {
    try {
        console.log(request.body)
        const user=await login(
            request.body.email,request.body.password
        )
        return response.status(200).send({
            data:user
        })
    } catch (error) {
        return response.status(400).send({
            data:error
        })
    }

    
}
module.exports={
    createusercontroller,createuserlogin
}