const mongoose = require('mongoose');
const momentsModel = require('../models/moments');

exports.updateMoment = async(req,res) =>{
    try {
        var data = {
            title: req.body.title,
            tags: req.body.tags
        }
        if(req.file){
            data.image =  req.file.path
        }
        await momentsModel.findByIdAndUpdate({'_id': mongoose.Types.ObjectId(req.body._id)},{$set: data},{new: true})
        .then((updatedMoment)=>{
            res.send({
                "Moment": updatedMoment
            })
        }).catch(err=>console.log(err));
    } catch (err) {
        res.send({
            "Error": err
        })
    }
};