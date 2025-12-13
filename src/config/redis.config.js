const {createClient} =require('redis');

const{REDIS_URL}=require('./server.config')
const client=createClient({
    url:REDIS_URL
});


client.on('error',(err)=>{
console.log("redis not connected",err)
})
client.on('connect',()=>{
     console.log("redis connected")
})

async function initRedis(){
    try {
        await client.connect();

    } catch (error) {
        console.log("Redis is not connected",error)
        
    }
}
module.exports={initRedis,client};