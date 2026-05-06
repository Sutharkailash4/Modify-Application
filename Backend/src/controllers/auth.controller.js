const model = require(".././models/auth.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerController = async (req, res) => {
    try {
        const data = req.body;
        if(!data.username || data.username.trim()==="") {
            return res.status(409).json({
                message : "Username is Required For Register"
            })
        } else if(!data.email || data.email.trim()==="") {
            return res.status(409).json({
                message : "Email is Required For Register"
            })
        } else if(!data.password || data.password.trim()==="") {
            return res.status(409).json({
                message : "Password is Required For Register"
            })
        } else {
            const {username, email, password} = req.body;
            const isUserAlreadyExists = await model.findOne({
                $or : [
                    {username},
                    {email}
                ]
        })
        if(isUserAlreadyExists){
            return res.status(409).json({
                message : "User Already Exists With This Username or Email"
            })
        }
        const hash_password = await bcrypt.hash(passowrd, 10);
        const user = await model.create({
            username : username,
            email : email,
            password : hash_password
        })
        }
    } catch(error) {
        res.status(400).json({
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

console.log("Hello")

const loginController = async (req, res) => {
    try {

    } catch(error) {
        res.status(400).json({
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

const getMeController = async (req, res) => {
    try {

    } catch(error) {
        res.status(400).json({
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

module.exports = {
    registerController,
    loginController,
    getMeController
}