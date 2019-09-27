var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/adminLogin', (req, res) => {
    username = req.body.adminUsername;
    password = req.body.adminPassword;
    if (username === "admin") {
        if (password === "admin") {
            var payload = { subject: "admin" };
            var token = jwt.sign(payload, 'adminKey', { expiresIn: 300 });
            res.header('auth-token', token);
            res.send({ token });
        } else {
            res.status(401).send('Unauthorized Access');
        }
    } else {
        res.status(401).send('Unauthorized Access');
    }
});

module.exports = router;