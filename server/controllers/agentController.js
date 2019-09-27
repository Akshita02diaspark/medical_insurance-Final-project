//registration form for agent 

var Agent = require('../models/agentModel');
const nodemailer = require('nodemailer');

var agentController = {};

agentController.save = function(req, res, next) {
    var agent = new Agent({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
    });
    password = req.body.password;
    mail = {
        firstname: req.body.first_name,
        to: req.body.email,
        phone: req.body.phone
    }
    agent.setPassword(req.body.password);
    sendEmail(mail);
    agent.save((err, agent) => {
        if (err) {
            let message = "";
            if (err.errors.email) message += "Email already exists.";
            if (err.errors.phone) message = " Phone number duplicate";
            if (err.errors.password) message = err;
            return res.json({
                success: false,
                message
            })
        } else {
            res.send(agent).status(200);
        };
    });

}

/////////////////////////////////////////////////////////////////////////////////

//transporter for using the service of any mail provider
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // username of gmail and password 
        user: 'harshddevil.hk93@gmail.com',
        pass: 'Jackalpower1@'
    }
});

function sendEmail(mail) {
    var mailOptions = {
        from: 'harshddevil.hk93@gmail.com',
        to: mail.to,
        subject: '<b>Login Credentials</b>',
        html: `<h3>Dear ${mail.firstname},</h3>

        Your username is ${mail.phone} <br>
        Your Password is ${password}.<br>

        NOTE: Please change your password as soon as possible.
        </b><br>
        We look forward to seeing you soon so that you can enjoy our services.<br>
        
        Please, do contact us if you have additional queries. Thanks again!<br>
        <h2>
        Best regards, <br>
        
        Team IMIC <br>
        
        
        </h2>`

    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}





///////////////////////////////////////////////////////////////////////////////////


//customer api for forget password 
agentController.forgotPassword = function(req, res) {
    Agent.findOne({ email: req.body.email }, function(err, users) {
        if (!users) {
            res.status(401).send("Email  Not Found !! ");
        } else {
            const otp = parseInt(makeotp(6));
            console.log(`otp generated is ${otp}`);
            res.status(200).send({
                message: "Otp has been sent on your mail."
            })
        }
    })
}

function makeotp(length) {
    var result = '';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

module.exports = agentController;