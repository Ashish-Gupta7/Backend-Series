const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/uploads");
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, (err, buf) => {
      const fn = buf.toString("hex") + path.extname(file.originalname);
      cb(null, fn);
    });
  },
});

const uploads = multer({ storage: storage });

module.exports = uploads;

// yaha path "./public/images/uploads" isliye sahi hai kyuki hum jo file upload krte hai wo iss config folder me nhi aata hai wo root directory se hi apna path dhudta hai aur hume root directory se hi file ko jaha save krna hai uska path dena hota hai.

// cb => The callback function cb is used to pass control back to Multer once you've determined the destination or filename.

// cb(null, "./public/image/upload");
// null: Indicates no error occurred.
// "./public/image/upload": The directory where you want to save the uploaded file.
