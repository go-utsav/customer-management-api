const { loginapi, registerapi, decodetoken, resetpassword } = require('./../controller/customerController');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', loginapi);
router.post('/register', registerapi);
router.post('/verifyuser',decodetoken);
router.post('/resetpassword',resetpassword);


module.exports = router;
