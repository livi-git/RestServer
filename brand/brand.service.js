const db = require('../_helpers/db');

module.exports = {
    getAllBrands,
    getBrandById
    
};

function getAllBrands(req, res){
    try {
        db.Brand.findAll()
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

function getBrandById(req, res){
    try {
        db.Brand.findByPk(req.query.brandid)
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