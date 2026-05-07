const model = require(".././models/auth.model")
const jwt = require("jsonwebtoken");

const identifyUser = async (req, res, next) => {
    try {
        const token = req.cookies.access_token;
        if(!token) {
            return res.status(404).json({
                message : "Token  Not Provided ! Unauthorized Access"
            })
        }
        let decoded = null;
        try {
            decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN)
        } catch(error) {
            return res.status(409).json({
                message : "Token is Not Valid ! Unauthorized Access"
            })
        }
        
        res.status(200).json({
            messsage : "User Fetched Successfully",
            id : decoded.id,
            email : decoded.email,
            username : decoded.username 
        })
    } catch(error) {
        res.status(400).json({
            message : "Something Went Wrong",
            error : error.message
        })
    }
}