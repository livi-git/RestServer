const express = require('express');
const router = express.Router();
const cartService = require('./cart.service');

// routes
router.get('/byuserid',getUserCart);
router.post('/addcart',addCart);
router.get('/deletecart',removeCart);
router.get('/updatecart',updateCart);


module.exports = router;

// route functions
function getUserCart(req, res, next){
    cartService.getCartForUser(req, res);
    
}

function addCart(req, res, next){
    cartService.addToCart(req, res);
    
}

function removeCart(req, res, next){
    cartService.deleteCart(req, res);
    
}

function updateCart(req, res, next){
    cartService.updateCart(req, res);
    
}