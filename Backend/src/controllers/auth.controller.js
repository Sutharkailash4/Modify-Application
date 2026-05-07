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
        const hash_password = await bcrypt.hash(password, 10);
        const user = await model.create({
            username : username,
            email : email,
            password : hash_password
        })

        const access_token = jwt.sign({
            id : user._id,
            email : user.email,
            username : user.username
        },
        process.env.JWT_ACCESS_TOKEN,
        {
            expiresIn : "3h"
        }
    )

    const refresh_token = jwt.sign({
        id : user._id,
        email : user.email,
        username : user.username
    },
    process.env.JWT_REFRESH_TOKEN,
    {
        expiresIn : "7d"
    }
)

    res.cookie("access_token",access_token,
        {
            httpOnly : true,
            secure : false,
            sameSite : "strict"
        }
    )

    res.cookie("refresh_token",refresh_token,
        {
            httpOnly : true,
            secure : false,
            sameSite : "strict"
        }
    )

    res.status(201).json({
        message : "User Register Successfully",
        username : user.username,
        id : user._id,
        email : user.email
    })

        }
    } catch(error) {
        res.status(400).json({
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

const loginController = async (req, res) => {
    try {
        const data = req.body;
        if(!data.password || data.password.trim()==="") {
            return res.status(409).json({
                message : "Password is Required For Login"
            })
        } else if((!data.username || data.username.trim()==="") && (!data.email || data.email.trim()==="")) {
            return res.status(409).json({
                message : "Username or Email is Required For Login"
            })
        } else {
            const {username, email, password} = req.body;
            const isUserExists = await model.findOne({
                $or : [
                    {username : username},
                    {email : email}
                ]
            })
            if(!isUserExists) {
                return res.status(404).json({
                    message : "Invalid Credentials"
            })
            }
            const isPasswordCorrect = await bcrypt.compare(password, isUserExists.password);
            if(!isPasswordCorrect) {
                return res.status(401).json({
                    message : "Invalid Credentials"
                })
            }
            const access_token = jwt.sign({
                id : isUserExists._id,
                email : isUserExists.email,
                username : isUserExists.username
            },
            process.env.JWT_ACCESS_TOKEN,
            {
                expiresIn : "3h"
            }
        )

            const refresh_token = jwt.sign({
                id : isUserExists._id,
                email : isUserExists.email,
                username : isUserExists.username
            },
            process.env.JWT_REFRESH_TOKEN,
            {
                expiresIn : "7d"
            }
        )

        res.cookie("access_token",access_token,
            {
                httpOnly : true,
                secure : false,
                sameSite : "strict"
            }
        )

        res.cookie("refresh_token",refresh_token,
            {
                httpOnly : true,
                secure : false,
                sameSite : "strict"
            }
        )
        res.status(200).json({
            message : "User Login Successfully",
            id : isUserExists._id,
            email : isUserExists.email,
            username : isUserExists.username
        })
        }
    } catch(error) {
        res.status(400).json({
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

const getMeController = async (req, res) => {
    try {   
        const token = req.cookies.access_token;
        if(!token) {
            return res.status(409).json({
                message : "Token Not Provided ! Unauthorized Access"
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
            message : "User Fetched Successfully",
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

module.exports = {
    registerController,
    loginController,
    getMeController
}