const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, "Username is Required For Register"],
        unique : [true, "Please Enter Unique Username"]
    },
    email : {
        type : String,
        required : [true, "Email is Required For Register"],
        unique : [true, "Please Enter Unique Email"]
    },
    password : {
        type : String,
        required : [true, "Password is Required For Register"]
    }
})

const userModel = mongoose.model("Users",userSchema);

module.exports = userModel;