// user enquiry database 

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//ContactUS Schema
const ContactUsSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        index: true,
        required: true
    },
    contact: {
        type: Number,
        required: true,
    },
    message: {
        type: String
    }
});

ContactUsSchema.plugin(uniqueValidator);

const ContactUs = module.exports = mongoose.model('ContactUs', ContactUsSchema);