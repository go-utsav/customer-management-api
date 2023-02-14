const { loginapi, registerapi, decodetoken, resetpassword } = require('./../controller/customerController');
var express = require('express');
var router = express.Router();

const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: './src/image',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`);
    }
});

// const multer = require('multer');
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'src/images/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// });

const upload = multer({
    storage: storage,
})

/* GET users listing. */
router.post('/login', loginapi);
router.post('/register', upload.single('profilepic'), registerapi);
router.post('/verifyuser', decodetoken);
router.post('/resetpassword', resetpassword);


module.exports = router;
