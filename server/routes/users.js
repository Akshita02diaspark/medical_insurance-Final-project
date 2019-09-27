var express = require('express');
var router = express.Router();
var Users = require("../controllers/customerController.js");
var user = require('../controllers/userService');
const agentVerify = require('./verifyToken');
const userVerify = require('../routes/userVerifyToken');


module.exports.userLoginPOST = function(req, res, next) {
    user.userLoginPOST(req, res, next);
};

// Get all Userss
router.get('/', function(req, res) {
    Users.list(req, res);
});

// Get single Users by id
router.get('/show/:id', function(req, res) {
    Users.show(req, res);
});


//
router.put('/registerNewPassword/:email', function(req, res) {
    Users.registerNewPassword(req, res);
})

/*
  ! Router api not in function 
// Create Users
router.get('/create', function (req, res) {
  Users.create(req, res);
});

*/

// Save Users

// http://localhost:8080/users

// router.post('/save', function(req, res) {
//     Users.save(req, res);
// });

// http://localhost:8080/users/createNew
router.post('/createNew', agentVerify, function(req, res) {
    Users.createNew(req, res);
});


/* 

// Edit Users
  ! Router api not in function 


router.get('/edit/:id', function (req, res) {
  Users.edit(req, res);
});

*/


//  update the data of the users
// http://localhost:8080/users/update/_id

router.put('/update/:id', function(req, res) {
    Users.update(req, res);
});

// Delete the data of the user/customer

router.delete('/delete/:id', function(req, res, next) {
    Users.delete(req, res);
});

// Update Policy Status by Admin

router.put('/updateStatus/:id', function(req, res, next) {
    Users.updateStatus(req, res);
});


//get users with aprooved status
// ==> http://localhost:8080/users/aproovedUsers
router.get('/aproovedUsers', function(req,res){
  Users.aproovedUsers(req,res);
});

//Apply for claims
router.post('/applyClaim/:id', function(req,res){
  Users.applyForClaim(req,res);
});

//approve the claims
// ==> http://localhost:8080/users/approveClaim
router.post('/approveClaim/:id', function(req,res){
  Users.approveClaim(req,res);
});

//showing the list of users who applied for claims
router.get('/claimUsers', function(req,res){
  Users.claimUsers(req,res);
})


module.exports = router;