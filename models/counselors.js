
const mongoose = require('mongoose');

const counselorSchema = new mongoose.Schema({
    image: {
        type: String
    },
    counselorName:{
        type:String,
        required: true
    },
    Price:{
        type:String,
        required: true
    } ,
    Description:{
        type:String,
        required: true

    }
})
const counselor = mongoose.model('counselor', counselorSchema);
module.exports = counselor;