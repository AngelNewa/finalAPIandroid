const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
     counselorName:{
        type:String,
        // required: true
    },
    Price:{
        type:String,
    } ,
    
    Date:{
        
            type:Date,
            default: new Date()
    }
});

const Booking = mongoose.model('AddBooking', BookingSchema);
module.exports = Booking;