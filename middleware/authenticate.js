const jwt =  require('jsonwebtoken');


const authenticate = async(req,res,next)=>{
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token,'$kir<>an$')

        req.user = decode
        next()
    } catch (err) {
        res.send({
            "message": "Authentication Failed!"
        })
    }
};

module.exports = authenticate;

