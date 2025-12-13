const Booking =require("../models/booking.model");



async function createBooking(response){
    try {
        const booking=await Booking.create(response);
        return booking;
    } catch (error) {
        console.log(error);
        
    }
}

module.exports={createBooking}