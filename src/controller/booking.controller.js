const Bookingservice =require('../service/booking.service');
const bookingservice=new Bookingservice();


async function createBookingcontroller(request,response) {
    try {
        console.log(request.body)
        console.log(request.userId)
        const booking=await bookingservice.createbookingservie(
            request.body.source.latitude,
            request.body.source.longitude,
            request.body.destination.latitude,
            request.body.destination.longitude,
            request.userId

        )
        return response.status(200).send({
            data:booking
        })
    } catch (error) {
        return response.status(400).send({
            data:error
        })
    }

    
}

module.exports={
    createBookingcontroller
}