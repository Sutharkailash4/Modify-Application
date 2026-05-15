const model = require("../models/song.model");
const id3 = require("node-id3");
const storageService = require("../services/storage.service");

const uploadSongController = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                message: "Song file is required"
            });
        }

        const songBuffer = req.file.buffer;

        const tags = id3.read(songBuffer);

        const title = tags.title || "unknown-song";

        const songFile = await storageService.uploadFile({
            buffer: songBuffer,
            filename: title + ".mp3",
            folder: "/moodify/songs"
        });

        let posterFile = null;

        if (tags.image?.imageBuffer) {
            posterFile = await storageService.uploadFile({
                buffer: tags.image.imageBuffer,
                filename: title + ".jpeg",
                folder: "/moodify/posters"
            });
        }

        const song = await model.create({
            songURL: songFile.url,
            posterURL: posterFile ? posterFile.url : "",
            title: title,
            mood: req.body.mood
        });

        res.status(201).json({
            message: "Song Created Successfully",
            song
        });

    } catch (error) {

        console.log(error);

        res.status(400).json({
            message: "Something Went Wrong",
            error: error.message
        });
    }
};

module.exports = {
    uploadSongController
};