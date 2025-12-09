const {createuserservice} =require('../service/user.services')


async function createusercontroller(request,response) {
    try {
        console.log(request.body)
        const user=await createuserservice({
            email:request.body.email,
            password:request.body.password,
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
module.exports={
    createusercontroller
}