const db = require('../_helpers/db');
const crypt = require('bcryptjs');

module.exports = {
    validateLogin,
    createUser
    
};

function validateLogin(req, res){
    try {
        db.User.findOne({
            where:{
                username: req.body.username
            }})
            .then((result)=>{
                if(result){
                    if(crypt.compareSync(req.body.password, result.password)){
                        result.password = null;
                        res.status(200).json(result);
                    }else{
                        res.status(200).json({error: "username or password is wrong!"})
                    }
                }else{
                    res.status(200).json({error: "username or password is wrong!"})
                }
            })
                .catch((err)=>{
                    res.status(400).json({ error: err.toString() })
                })
    } catch (error) {  
        res.status(400).json(error);
    }
}

async function createUser(req, res){
    try {

        //check username and password
        if(!req.body.username && !req.body.password){
            res.status(400).json({error: "invalid username or password!"});
        }else
        // check dublicate
        if (await db.User.findOne({ where: { username: req.body.username } })) {
            res.status(200).json({error:  "user already exists"});
        }else{
            req.body.password = crypt.hashSync(req.body.password, 10),
            db.User.create(req.body)
                .then(result=>{
                    result.password  = null;
                    res.status(200).json(result);
                })
                    .catch(err=>{
                        res.status(400).json({error: err.toString()});
                    })
        }

    } catch (error) {
        res.status(400).json(error);
    }
}