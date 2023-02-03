const db = require('../_helpers/db');

const limit =10;

module.exports = {
    getByCategory,
    getTopRated,
    getBestSeller,
    bySpecialOffer,
    getByBrand
    
};

function getByCategory(req, res){
    try {
        db.Product.findAll({
            where:{
                categoryId: req.query.categoryid
            },
            include:[ {model: db.Review}],
            offset: (req.query.page-1)*limit,
            limit: limit,
            order:[
                ['id', 'ASC'],
            ]
        })
            .then(result=>{
                res.status(200).json(result);
            })
                .catch(err=>{
                    res.status(400).json(err.toString());
            })
    } catch (error) {
        res.status(400).json(error);
    }
}

function getTopRated(req, res){
    try {
        db.Product.findAll({
            order:[
                ['star', 'ASC']
            ],
            include:[
                {model: db.Review}
            ],
            offset: (req.query.page-1)*limit,
            limit: limit
        })
            .then(result=>{
                res.status(200).json(result);
            })
                .catch(err=>{
                    res.status(400).json(err.toString());
                })
    } catch (error) {
        res.status(400).json(error);
    }
}

function getBestSeller(req, res){
    try {
        db.Product.findAll({
            where:{
                bestseller: 1
            },
            order:[
                ['id', 'ASC']
            ],
            include:[
                {model: db.Review}
            ],
            offset: (req.query.page-1)*limit,
            limit: limit
            })
                .then(result=>{
                    res.status(200).json(result);
                })
                    .catch(err=>{
                        res.status(400).json(err);
                    })
    } catch (error) {
        res.status(400).json(error);
    }
}

function bySpecialOffer(req, res){
    try {
        db.Product.findAll({
            order:[
                ['offer','DESC']
            ],
            include:[
                {model: db.Review}
            ],
            offset: (req.query.page-1)*limit,
            limit: limit

        })
            .then(result=>{
                res.status(200).json(result);
            })
                .catch(err=>{
                    res.status(400).json(err.toString());
                })
    } catch (error) {
        res.status(400).json(error);
    }
}

function getByBrand(req, res){
    try {
        db.Product.findAll({
            where:{
                brandId: req.query.brandid
            },
            include:[
                {model: db.Review}
            ],
            offset:(req.query.page-1)*limit,
            limit:limit
        })
            .then(result=>{
                res.status(200).json(result);
            })
                .catch(err=>{
                    res.status(400).json(err.toString());
                })
    } catch (error) {
        res.status(400).json(error);
    }
}