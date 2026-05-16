const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    url: {
        type: String,
        required: [true, "Song URL is required"]
    },
    posterUrl: {
        type: String,
        required: [true, "Poster URL is Required"],
    },
    title: {
        type: String,
        required: [true, "Title is Required"]
    },
    mood: {
        type: String,
        enum: {
            values: [ "sad", "happy", "surprised", "angry" ],
            message: "Enum this is"
        }
    }
})

const songModel = mongoose.model("songs", songSchema)

module.exports = songModel