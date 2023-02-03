const db = require('../_helpers/db');

module.exports = {
    getCartForUser,
    deleteCart,
    addToCart,
    updateCart
    
};

function getCartForUser(req, res){
    try {
        db.Cart.findAll({
            where:{
                userId: req.query.userid
            },
            include:[
                {model: db.Product},
                {model: db.User}
            ]
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

function deleteCart(req, res){
    try {
        db.Cart.findByPk(req.query.cartid)
            .then(result=>{
                result.destroy()
            })
                .catch(err=>{
                    res.status(400).json({error: err.toString()});
                })

    } catch (error) {
        res.status(400).json(error);
    }
}

function addToCart(req, res){
    try {
        db.Cart.create(req.body)
            .then(result=>{
                res.status(200).json(result);
            })
                .catch(err=>{
                    res.status(400).json({error: err.toString()});
                })
    } catch (error) {
        res.status(400).json(error);
    }
}

function updateCart(req, res){
    try {
        db.Cart.update(req.body)
            .then(result=>{
                res.status(200).json(result);
            })
                .catch(err=>{
                    res.status(400).json({error: err.toString()});
                })
    } catch (error) {
        res.status(400).json(error);
    }
}