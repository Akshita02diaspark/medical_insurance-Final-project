var mongoose = require("mongoose");
var Users = require("../models/Users");
const cryptography = require('../helper/cryptography');
const nodemailer = require('nodemailer');

//mongoose.set('findByIdAndUpdate', false);

var customerController = {};

// Show list of users
customerController.list = function(req, res) {
    Users.find({}).exec(function(err, users) {
        if (err) {
            console.log("Error:", err);
        } else {
            // res.render("../views/users/index", {users: users});
            res.send(users);
        }
    });

};

// Show Users by id
customerController.show = function(req, res) {
    Users.findOne({ _id: req.params.id }).exec(function(err, users) {
        if (err) {
            console.log("Error:", err);
        } else {
            res.send(users)
        }
    });
};

/*
    ! Not in function 
// Create new Users
customerController.create = function (req, res) {
  res.render("../views/users/create");
}; 
*/


//random password generate for customer during registration
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/***************************API FOR SENDING PASSWORD THROUGH MAIL **************************** */



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
        subject: 'Login Credentials',
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
/***************************(-------API FOR SENDING PASSWORD THROUGH MAIL-------) **************************** */

//*************************(----API FOR SENDING CLAIM APPLY MAIL--------) *************************************************** /
function sendApplyEmail(mail) {
    var mailOptions = {
        from: 'harshddevil.hk93@gmail.com',
        to: mail.to,
        subject: 'Claim Request Notification',
        html: `<h3>Dear <b>${mail.firstname} </b>,</h3>

        We have recieved your claim request for <b>${mail.policyName} policy. </b>So, we will give you the response as soon as possible.   
       <br>
        Good luck!!!
        </b><br>
        
        Please, do contact with us if you have additional queries.<br> Thanks again!<br>
        <h2>
        Best regards, <br>
        
        Team IMIC <br>
        
        
        </h2>`
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}


//************************************************************************************************************************* /

////////////////////////////(API FOR SENDING CLAIM APPROVAL MAIL)//////////////////////////////////////////


function sendApproveEmail(mail) {
    var mailOptions = {
        from: 'harshddevil.hk93@gmail.com',
        to: mail.to,
        subject: 'Claim Request Notification',
        html: `<h3>Dear <b>${mail.firstname} </b>,</h3>

        Your claim request for <b>${mail.policyName} policy </b> is approved. We will contact you for further information.  
       <br>
        Good luck!!!
        </b><br>
        
        Please, do contact with us if you have additional queries.<br> Thanks again!<br>
        <h2>
        Best regards, <br>
        
        Team IMIC <br>
        
        
        </h2>`
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}



//************************************************************************************************************************************ /



//new customer registration
module.exports = customerController.createNew = function(req, res, next) {
    var user = new Users({
        title: req.body.title,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        location: {
            address: req.body.location.address,
            state: req.body.location.state,
            city: req.body.location.city
        },
        policy: {
            policyName: req.body.policy.policyName,
            policyAmount: req.body.policy.policyAmount,
            premium: req.body.policy.premium,
        },
        nominie: {
            nominieName: req.body.nominie.nominieName,
            nominieRealtion: req.body.nominie.nominieRealtion,
            nominieNumber: req.body.nominie.nominieNumber,
        },

        gender: req.body.gender,
        pan: req.body.pan,
        adhar: req.body.adhar,
        birthdate: req.body.birthdate,
    })

    user.setAprooved("Not Aprooved");
    user.save((err, user) => {
        if (err) {
            res.send({
                message: "Error happended",
                err
            })
        } else {
            console.log("user registered succesfully");
            res.send(user).status(200);
        };
    });
}

/* 
    ! Not in function now
// Edit an Users
customerController.edit = function (req, res) {
  Users.findOne({ _id: req.params.id }).exec(function (err, Users) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/users/edit", { Users: Users });
    }
  });
};
*/

// Update an Users
customerController.update = function(req, res) {

    Users.findByIdAndUpdate(req.params.id, {
        $set: { firstname: req.body.firstname, lastname: req.body.lastname, phone: req.body.phone, email: req.body.email }
    }, { useFindAndModify: false }, function(err, Users) {
        if (err) {
            console.log(err);
        } else {
            res.send(Users)
        }
    });
};


// Update Status Of User Policy by admin

customerController.updateStatus = function(req, res) {
    console.log("method is working");
    Users.findByIdAndUpdate(req.params.id, { $set: { status: req.body.status } }, { useFindAndModify: false }, function(err, Users) {
        if (err) {
            console.log("Update Error", err);
        } else {
            //password generate for user
            password = makeid(10);

            console.log("User password is " + password);
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            startDate = mm + '/' + dd + '/' + yyyy;
            Users.setStartDate(startDate);
            if (Users.policy.premium == "2,000")
                yyyy = yyyy + 2;
            else if (Users.policy.policyAmount == "2,500")
                yyyy = yyyy + 5;
            else if (Users.policy.policyAmount == "5,000")
                yyyy = yyyy + 10;
            else
                console.log(err);
            endDate = mm + '/' + dd + '/' + '/' + yyyy;
            Users.setPassword(password);

            Users.setEndDate(endDate);
            var mail = {
                to: Users.email,
                firstname: Users.firstname,
                phone: Users.phone
            }
            sendEmail(mail);
            Users.save(function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Successfully created an Users.");
                    res.send(Users);
                }
            })
        }
    })
}

// Delete an Users
customerController.delete = function(req, res) {
    Users.remove({ _id: req.params.id }, function(err) {
        if (err) {
            console.log(err);
        } else {
            res.send({
                message: "Data deleted sucessfully"

            })
        }
    });
};


//register api for custmer
// update password an Users
customerController.registerNewPassword = function(req, res) {
    Users.findOne({ "email": req.params.email }, function(err, users) {
        if (!users) {
            res.send("Email  Not Found !! ");

        } else {
            //if email is found in the database
            //converting  user provided data to encryption
            const passcode = cryptography.sha256(req.body.password);
            if (users.password === passcode) {
                //if password matched
                newpassword = req.body.newpassword;
                users.setPassword(newpassword);

                users.save(function(err) {
                    if (err) {
                        console.log(err);
                        res.send(err)
                    } else {
                        res.send({
                            message: "Password change sucessfully !!"
                        });
                    }
                })
            } else {
                res.send({
                    message: "password is incorrect"
                })
            };
        }
    })

}


//fetching users from database, aprooved by admin 
customerController.aproovedUsers = function(req, res) {
    Users.find({ status: "Approved" }, function(err, users) {
        if (!users) {
            res.send("No users found");
        } else {
            res.send(users);
        }
    })
}

//Apply for claim
customerController.applyForClaim = function(req, res) {
    Users.findByIdAndUpdate(req.params.id, { $set: { claim: req.body.claim } }, { useFindAndModify: false }, function(err, user) {
        if (err) {
            console.log("error", err);
        } else {
            var mail = {
                to: user.email,
                firstname: user.firstname,
                policyName: user.policy.policyName
            }
            user.save(function(error) {
                if (error) {
                    res.send("Unauthorized Access");
                } else {
                    sendApplyEmail(mail);
                    res.send(user);
                }
            })
        }
    })
}


customerController.approveClaim = function(req, res) {
    Users.findByIdAndUpdate(req.params.id, { $set: { claim: req.body.claim } }, { useFindAndModify: false }, function(err, user) {
        if (err) {
            console.log("error", err);
        } else {
            var mail = {
                to: user.email,
                firstname: user.firstname,
                policyName: user.policy.policyName
            }
            user.save(function(error) {
                if (error) {
                    res.send("Something went wrong");
                } else {
                    sendApproveEmail(mail);
                    res.send(user);
                }
            })
        }
    })
}

customerController.claimUsers = function(req, res) {
    Users.find({ claim: "requested" }, function(err, users) {
        if (!users) {
            res.send("No users found");
        } else {
            res.send(users);
        }
    })
}

module.exports = customerController;