
const {setDriverSocket}=require('./updatedriverlocation.service')
function initSocket(io){
    io.on('connection',(socket)=>{
        console.log("New socket created",socket.id);
        socket.on('registerDriver',async ({driverId})=>{
            if(!driverId){
                return ;
            }
            await setDriverSocket(driverId,socket.id)
        })
         socket.on('disconnect',async ()=>{
            
            
        })
    })
}
module.exports=initSocket