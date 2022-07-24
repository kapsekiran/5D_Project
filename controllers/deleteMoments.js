const momentsModel = require('../models/moments');


exports.deleteMoment = async(req,res) =>{
    try {
        await momentsModel.deleteOne({'userId': req.body.userId})
        .then(()=>{
            res.send({
                "message": "Moment Delete Successfully!"
            })
        })
    } catch (err) {
        res.send({
            "Error": err
        })
    }
};