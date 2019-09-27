var mongoose = require('mongoose');
var cryptography = require('../helper/cryptography');


var customerSchema = new mongoose.Schema({
    title: String,
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: Number,
        unique: true,
        required: true

    },
    location: {
        address: String,
        state: String,
        city: String

    },
    policy: {
        policyName: String,
        policyAmount: String,
        premium: String,

    },
    nominie: {
        nominieName: String,
        nominieRealtion: String,
        nominieNumber: Number,

    },
    gender: String,
    pan: {
        type: String,
        required: true,
        unique: true
    },
    adhar: {
        type: Number,
        required: true,
        unique: true

    },
    birthdate: String,
    password: {
        type: String
    },
    status: String,
    claim: String,
    startDate: {
        type: String
    },
    endDate: {
        type: String
    }
});


customerSchema.methods.setPassword = function(password) {
    this.password = cryptography.sha256(password);
}

customerSchema.methods.setAprooved = function(status) {
    this.status = status;
}

customerSchema.methods.setStartDate = function(startDate) {
    this.startDate = startDate;
}
customerSchema.methods.setEndDate = function(endDate) {
    this.endDate = endDate;
}



var User = mongoose.model('User', customerSchema);
module.exports = User;