import multer from "multer";

// Creating multer middleware to parsing formdata
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

export default upload;

// User uploads an image

// Multer parses the form-data

// Saves the file temporarily on disk

// Adds file info to req.file

// Your controller can now process it