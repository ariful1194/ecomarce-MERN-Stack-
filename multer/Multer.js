const uuidv4 = require("uuid/v4");

// Multer
const multer = require("multer");
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./client/src/image");
  },
  filename: function(req, file, cb) {
    let fileName = uuidv4() + file.originalname;
    cb(null, fileName);
  }
});

// var upload = multer({ storage: storage }).single("image");

const fileFilter = function(req, file, cb) {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb({ msg: "File Type not supportad" }, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 2
  },
  fileFilter: fileFilter
}).single("image");

module.exports = upload;
