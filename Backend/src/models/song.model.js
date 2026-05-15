const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
    songURL : {
        type : String,
        required : [true, "Song URL is Required"]
    },
    posterURL : {
        type : String,
        required : [true, "Post URL is Required"]
    },
    title : {
        type : String,
        required : [true, "Song Title is Required"]
    },
    mood : {
        type : String,
        required : [true, "Mood is Required"],
        enum : {
            values : ["happy, sad, surprised"],
            message : "enum this is"
        }
    }
});

const songModel = mongoose.model("song",songSchema);

module.exports = songModel;