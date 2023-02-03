const express = require('express');
const router = express.Router();
const brandService = require('./brand.service');

// routes
router.get('/getall',getBrands);
router.get('/bybrandid',getByBrandId);


module.exports = router;

// route functions
function getBrands(req, res, next){
    brandService.getAllBrands(req, res);
    
}

function getByBrandId(req, res, next){
    brandService.getBrandById(req, res);
    
}