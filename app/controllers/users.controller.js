const db = require("../models");
const Users = db.users;
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
    if (!req.body.username) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) {
                console.log(err);
            }
            user.password = hash;
            Users.create(user).then(data => {
                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the settings."
                    });
                });
        });
    });
};

exports.findAll = (req, res) => {
    const email = req.params.email
    Users.findAll({ where: { email: `${email}` } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving settings."
            });
        });

};