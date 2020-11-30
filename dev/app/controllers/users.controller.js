"use strict";
var db = require('../models');
var Users = db.users;
var bcrypt = require('bcrypt');
exports.create = function (req, res) {
    if (!req.body.username) {
        res.status(400).send({
            message: 'Content can not be empty!',
        });
        return;
    }
    var user = {
        username: req.body.username,
        password: req.body.password,
    };
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) {
                console.log(err);
            }
            user.password = hash;
            Users.create(user).then(function (data) {
                res.send(data);
            })
                .catch(function (err) {
                res.status(500).send({
                    message: err.message ||
                        'Some error occurred while creating the settings.',
                });
            });
        });
    });
};
exports.findAll = function (req, res) {
    var username = req.params.username;
    Users.findAll({ where: { username: "" + username } })
        .then(function (data) {
        res.send(data);
    })
        .catch(function (err) {
        res.status(500).send({
            message: err.message ||
                'Some error occurred while retrieving settings.',
        });
    });
};
