const momentsModel = require('../models/moments');
const multer = require('multer');


exports.addMoment = async(req,res,next)=>{
    try {
        
        totalMoment = await momentsModel.countDocuments();

        let moment = new momentsModel({
            title: req.body.title,
            tags: req.body.tags,
            userId: totalMoment + 1,
        })
        if(req.file){
            moment.image = req.file.path
        }
        moment.save().then(()=>{
            res.send({
                "message": "Moment Added Successfully!"
            })
        }).catch(err => console.log(err));
            
    } catch (err) {
        res.send({
            "Error": err
        })
    }
};