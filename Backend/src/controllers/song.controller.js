const model = require(".././models/song.model");

const uploadSongController = async (req, res) => {
    try {
        console.log(req.file);
        console.log(req.body);
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