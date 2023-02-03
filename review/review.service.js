const db = require('../_helpers/db');

module.exports = {
    getReviewForProduct
    
};

function getReviewForProduct(req, res){
    try {
        db.Review.findAll({
            where:{
                productId: req.query.productid
            }
        })
            .then((result)=>{
                res.json(result);
            })
                .catch((err)=>{
                res.status(400).json({ error: err.toString() })
                })
    } catch (error) {  
        res.status(400).json(error);
    }
}