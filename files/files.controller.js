const express = require('express');
const router = express.Router();
const fileService = require('./files.service');

// routes
router.get('/getfile',getFile);


module.exports = router;

// route functions
function getFile(req, res, next){
    fileService.getFileByName(req, res);
    
}