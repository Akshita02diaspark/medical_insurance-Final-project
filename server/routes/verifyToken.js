const jwt = require('jsonwebtoken');




//Verify Token
module.exports = function(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send("Unauthorized Access");
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        res.status(401).send("Unauthorized token");
    }
    
    let payload = jwt.verify(token,"secretKey");
    if (!payload) {
        res.status(401).send("Unauthorized Request");
    }
    req.userId = payload.subject;
    next();

}