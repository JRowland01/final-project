var express = require("express");
var UserController = require('../controllers/usercontroller');

var router = new express.Router();

router.post('/register', UserController.register);

router.post('/login', UserController.login);

module.exports = router;
