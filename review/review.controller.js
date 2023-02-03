const express = require('express');
const router = express.Router();
const reviewService = require('./review.service');

// routes
router.get('/forproduct',forProduct);


module.exports = router;

// route functions
function forProduct(req, res, next){
    reviewService.getReviewForProduct(req, res);
    
}