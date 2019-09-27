'use strict'

var db = require('../connection/connection');
const mongoose = require('mongoose');
const register = mongoose.model('User');
var cryptography = require('../helper/cryptography');



module.exports = function() {
    return {
        userLoginPOST: function(obj, cb) {
            //These details will be fetched from DB
                register.find({ "phone": obj.phone }).then(res => {

                if (res[0].password === obj.password) {
                    cb(null, res[0])
                } else {
                    cb(true, null);
                }
            }).catch(err => {
                cb(true, null);
            })
        }
    }
}