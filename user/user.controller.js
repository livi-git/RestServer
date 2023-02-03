const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/adduser',addUser);
router.post('/login',login);


module.exports = router;

// route functions
function addUser(req, res, next){
    userService.createUser(req, res);  
}

function login(req, res, next){
    userService.validateLogin(req, res);
}