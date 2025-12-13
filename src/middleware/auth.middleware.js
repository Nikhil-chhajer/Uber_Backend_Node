const jwt = require('jsonwebtoken');
const{JWT_SECRET_KEY}=require('../config/server.config')

async function authmiddleware(request,response,next){
    try{
        const authHeader = request.headers['authorization'];
        if (!authHeader) {
      return response.status(401).json({ message: "Authorization header missing" });
    }
    const token=authHeader.startsWith('Bearer ')?authHeader.split(' ')[1]:authHeader;
    console.log(token)
       if (!token) {
      return response.status(401).json({ message: "Token missing" });
    }
        const decoded = jwt.verify(token,JWT_SECRET_KEY);
        request.userId=decoded.userId
      

        next();

    }
    catch(error){
        console.log(error)
         return response.status(401).json({ message: "Invalid or expired token" });
        
    }

}
module.exports=authmiddleware