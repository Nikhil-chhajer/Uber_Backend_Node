const mongoose=require('mongoose');

const bookingSchema =new mongoose.Schema({
    passenger:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    },
    driver:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    },
    source:{
        latitude:{
            type:Number,
        },
        longitude:{
            type:Number,
        }
    },
    destination:{
        latitude:{
            type:Number,
        },
        longitude:{
            type:Number,
        }
    },
    fare:Number,
    distance:Number,
    status:{
        type:String,
        enum: ['pending', 'confirmed', 'completed', 'cancelled'], 
        default: 'pending',
    },
    feedback:{
        type:String,
        default:null
    
    },
    rating: {
        type:Number,
        default:0
    },


})



const Booking = mongoose.model("Booking",bookingSchema);
module.exports=Booking