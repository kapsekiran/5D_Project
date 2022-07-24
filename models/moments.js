const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const momentsSchema = new Schema({
    title: {
        type: String,
        default: ""
    },
    image: {
       type: String
    },
    tags: {
        type: String,
        default: ""
    },
    userId: {
        type: Number
    }
},{
    timestamps: true
})


module.exports = mongoose.model('moments',momentsSchema);