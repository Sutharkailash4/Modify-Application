const multer = require("multer");

const storage = multer.memoryStorage();

const upload = multer({
    storage  : storage,
    limits : {
        fileSize : 1024 * 1024 * 5 //max 5 mb file is allowed
    }
})

module.exports = upload;