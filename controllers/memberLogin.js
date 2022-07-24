const memberDetailsModel = require('../models/memberDetails');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.memberLogin = async(req,res,next)=>{
    try {
        var emailId = req.body.emailId;
        var password = req.body.password; 

        member = await memberDetailsModel.findOne({'emailId': emailId});
        if(member){
            await bcrypt.compare(password,member.password,function(err, result){
                if(err){
                    res.send({
                        "Error": err
                    })
                }
                if(result){
                    let token = jwt.sign({emailId: member.emailId},'$kir<>an$',{expiresIn: '1h'});
                    res.send({
                        "message": "Login Successfully!",
                        "Token": token
                    })
                }
                else{
                    res.send({
                        "message": "Invalid Password!"
                    })
                }
            })
        }
        else{
            res.send({
                "message": "Not Registered!"
            })
        }

    } catch (err) {
        res.send({
            "Error": err
        })
    }
};