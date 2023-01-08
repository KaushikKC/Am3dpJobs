const multer = require("multer");
const {GridFsStorage} = require("multer-gridfs-storage");

const storage = new GridFsStorage({
    url: "mongodb+srv://Am3dpJobs:Pondicherry123@cluster0.0kyoubg.mongodb.net/?retryWrites=true&w=majority" ,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-any-name-${file.originalname}`;
            return filename;
        }

        return {
            filename: `${Date.now()}-any-name-${file.originalname}`,
        };
    },
});
 
const JobUpload = multer({ storage });


module.exports = JobUpload;

