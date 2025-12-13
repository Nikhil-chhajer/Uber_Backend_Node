
const dotenv=require('dotenv').config();
module.exports={
 PORT:process.env.PORT,
 JWT_SECRET_KEY:process.env.JWT_SECRET_KEY,
 REDIS_URL:process.env.REDIS_URL
}