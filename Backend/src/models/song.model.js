const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
    songURL : {
        type : String,
        required : [true, "Song URL is Required"]
    },
    postURL : {
        type : String,
        required : [true, "Post URL is Required"]
    },
    title : {
        type : String,
        required : [true, "Song Title is Required"]
    }
});

const songModel = mongoose.model("song",songSchema);

module.exports = songModel;