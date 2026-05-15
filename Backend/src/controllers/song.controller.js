const model = require(".././models/song.model");
const id3 = require("node-id3");

const uploadSongController = async (req, res) => {
    try {
        console.log(req.file);
        console.log(req.body);
        const tags = id3.read(req.file.buffer);
        console.log(tags);
        res.send("ok");
    } catch(error){
        res.status(400).json({
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

module.exports = {
    uploadSongController
}