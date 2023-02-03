const db = require('../_helpers/db');

module.exports = {
    getCategories
    
};

function getCategories(req, res){
    try {
        db.Category.findAll()
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