
const {createBooking} =require('../repository/booking.repo');
const haversineDistance = require('../utils/haversine_distance');
const {findnearbydriver}=require('./updatedriverlocation.service')
const axios = require('axios');

class Bookingservice{

    async createbookingservie(srclat,srclong,deslat,deslong,userId){
        try{
            const Basefare=30;
            const distance=haversineDistance(srclat,srclong,deslat,deslong);
        
            const fare=Basefare+distance*10;
            const bookingdata={
                passenger:userId,
                source:{
                    latitude:srclat,
                    longitude:srclong
                },
                destination:{
                    latitude:deslat,
                    longitude:deslong
                },
                fare:fare,
                distance:distance,

            }
            console.log(srclat,srclong)
            const booking=await createBooking(bookingdata);
            const nearbydrivers=await findnearbydriver(srclat,srclong)
            console.log(nearbydrivers)
            //notify the near by driver
           const response= await  axios.post('http://localhost:4000/api/v1/notification',{
                "rideId":booking._id,
    "rideInfo":bookingdata,
    "driverIds":nearbydrivers
            })
            console.log(response)
            return booking;
        }
        catch(error){
            console.log(error);

        }
    }
    


}

module.exports=Bookingservice