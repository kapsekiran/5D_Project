const memberDetailsModel = require('../models/memberDetails');
const bcrypt = require('bcrypt');


exports.memberRegistration = async(req,res)=>{
    try {
        var Member = await memberDetailsModel.findOne({'emailId': req.body.emailId.toLowerCase()});
        if(Member){
            res.send({
                "Message": "Member Already Registered!"
            })
        }
        else{
            bcrypt.hash(req.body.password, 10, function(err,hashed){
                if(err){
                    res.status(200).json({
                        "Error": err
                    })
                }
                let memberRegistration = new memberDetailsModel({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    mobileNumber: req.body.mobileNumber,
                    city: req.body.city,
                    emailId: req.body.emailId.toLowerCase(),
                    password: hashed
                })
                memberRegistration.save().then((member)=>{
                    res.send({
                        "message": "Member Added Successfully!",
                        "Member": member
                    })
                });
    
            });
        }
    } catch (err) {
        res.send({
            "Error": err
        })
    }
};