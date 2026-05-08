const model = require(".././models/auth.model")
const jwt = require("jsonwebtoken");
const blacklistModel = require(".././models/blacklist.model");
const redis = require(".././config/cache");

const identifyUser = async (req, res, next) => {
    try {
        const token = req.cookies.access_token;
        if(!token) {
            return res.status(404).json({
                message : "Token  Not Provided ! Unauthorized Access"
            })
        }
        const isTokenBlacklisted = await blacklistModel.findOne({token});
        if(isTokenBlacklisted) {
            return res.status(401).json({
                message : "Invalid Token"
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

        req.user = decoded;
        next();
    } catch(error) {
        res.status(400).json({
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

module.exports = {
    identifyUser
};