const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const cryptography = require('../helper/cryptography')

const adminSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        unique: true,
        required: true
    }

});

adminSchema.plugin(uniqueValidator);

adminSchema.methods.setPassword = function(password){
    this.password = cryptography.sha256(password);

}


const agent = module.exports = mongoose.model('agent',adminSchema)

