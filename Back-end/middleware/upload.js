
const StudentData = require("../models/StudentData");

const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    if (file.mimetype === "image/png") {
      callback(null, true);
    } else {
      console.log("Upload only PNG files"); //only for png file 
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 2, // 2MB limit
  },
});


