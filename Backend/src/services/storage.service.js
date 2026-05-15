const imageKit = require("@imagekit/nodejs").default;

const client = new imageKit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY
});

const uploadFile = async ({buffer, filename, folder}) => {
    try {
        const file = await client.files.upload({
            file : buffer.toString("base64"),
            filename : filename,
            folder : folder
        });

        return file;
    } catch(error){
        console.log(error.message);
    }
}

module.exports = {
    uploadFile
}