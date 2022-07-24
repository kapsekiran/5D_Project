const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const memberDetailsSchema = new Schema({
    firstName: {
        type: String,
        max: 100,
        default: ""
    },
    lastName: {
        type: String,
        max: 100,
        default: ""
    },
    mobileNumber: {
        type: Number,
        default: ""
    },
    city: {
        type: String,
        default: ""
    },
    emailId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
});


module.exports = mongoose.model('memberDetails',memberDetailsSchema);