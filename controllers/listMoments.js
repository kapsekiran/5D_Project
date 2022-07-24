const momentsModel = require('../models/moments');

exports.listMoments = async(req,res) =>{
    try {
        var moments = await momentsModel.find({});
        res.send({
            "Moments": moments
        });
    } catch (err) {
        res.send({
            "Error": err
        });
    }
};