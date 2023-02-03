const fs = require('fs');
const path = require('path');

module.exports = {
    getFileByName
};

function getFileByName(req, res){
    try {
        

        const option ={
            root: path.join(__dirname.slice(0,__dirname.lastIndexOf(path.sep)))
        }
        if(req.query.filename && fs.existsSync('./static/'+req.query.filename)){
            res.sendFile('/static/'+req.query.filename, option, function (err) {
                if (err) {
                    res.status(400).json({error: err.toString()})
                }
            });
        }else(
            res.status(400).json({error: "file doesn't exist"})
        )
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}
