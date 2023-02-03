const express = require('express');
const router = express.Router();
const productService = require('./product.service');

// routes
router.get('/bycategory',getByCategoryId);
router.get('/byspecialoffer',SpecialOffer);
router.get('/bybestseller',byBestSeller);
router.get('/bybrand',byBrand);
router.get('/byrating',ByRating);


module.exports = router;

// route functions
function getByCategoryId(req, res, next){
    productService.getByCategory(req, res);
    
}

function SpecialOffer(req, res, next){
    productService.bySpecialOffer(req, res);
    
}

function byBestSeller(req, res, next){
    productService.getBestSeller(req, res);
    
}

function byBrand(req, res, next){
    productService.getByBrand(req, res);
    
}

function ByRating(req, res, next){
    productService.getTopRated(req, res);
    
}