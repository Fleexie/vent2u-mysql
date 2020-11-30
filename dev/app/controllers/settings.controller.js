"use strict";
var db = require('../models');
var Setting = db.settings;
// Create and Save a new settings
exports.create = function (req, res) {
    if (!req.body.temperature) {
        res.status(400).send({
            message: 'Content can not be empty!',
        });
        return;
    }
    // Create a settings
    var setting = {
        temperature: req.body.temperature,
        humidity: req.body.humidity,
        light: req.body.light,
        uid: req.body.uid,
    };
    // Save settings in the database
    Setting.create(setting)
        .then(function (data) {
        res.send(data);
    })
        .catch(function (err) {
        res.status(500).send({
            message: err.message ||
                'Some error occurred while creating the settings/setting.',
        });
    });
};
// Retrieve all settings from the database.
exports.findAll = function (req, res) {
    var id = req.params.id;
    Setting.findAll({ where: { uid: "" + id } })
        .then(function (data) {
        res.send(data);
    })
        .catch(function (err) {
        res.status(500).send({
            message: err.message ||
                'Some error occurred while retrieving settings/setting.',
        });
    });
};
// Find a single settings with an id
exports.findOne = function (req, res) {
    var id = req.params.id;
    Setting.findByPk(id)
        .then(function (data) {
        res.send(data);
    })
        .catch(function (err) {
        res.status(500).send({
            message: 'Error retrieving settings/preset with id=' + id,
        });
    });
};
// Delete a settings with the specified id in the request
exports.delete = function (req, res) {
    var id = req.params.id;
    Setting.destroy({
        where: { id: id },
    })
        .then(function (num) {
        if (num == 1) {
            res.send({
                message: 'settings/preset was deleted successfully!',
            });
        }
        else {
            res.send({
                message: "\n            Cannot delete Setting/preset with id=" + id + ". \n            Maybe settings/preset was not found!",
            });
        }
    })
        .catch(function (err) {
        res.status(500).send({
            message: 'Could not delete settings/preset with id=' + id,
        });
    });
};
