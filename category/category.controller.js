const express = require('express');
const router = express.Router();
const categoryService = require('./category.service');

// routes
router.get('/getall',getAllCategories);


module.exports = router;

// route functions
function getAllCategories(req, res, next){
    categoryService.getCategories(req, res);
    
}