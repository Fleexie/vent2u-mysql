const db = require("../models");
const Setting = db.settings;
const Op = db.Sequelize.Op;

// Create and Save a new settings
exports.create = (req, res) => {
    if (!req.body.temperature) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    // Create a settings
    const setting = {
        temperature: req.body.temperature,
        humidity: req.body.humidity,
        light: req.body.light,
        uid: req.body.uid,
    };

    // Save settings in the database
    Setting.create(setting)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message ||
                    "Some error occurred while creating the settings/setting.",
            });
        });
};

// Retrieve all settings from the database.
exports.findAll = (req, res) => {
    const id = req.params.id;
    // var condition = uid ? { uid: { [Op.like]: `%${uid}%` } } : null;

    Setting.findAll({ where: { uid: `${id}` } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message ||
                    "Some error occurred while retrieving settings/setting.",
            });
        });
};

// Find a single settings with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Setting.findByPk(id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving settings/preset with id=" + id,
            });
        });
};

// Delete a settings with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Setting.destroy({
            where: { id: id },
        })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "settings/preset was deleted successfully!",
                });
            } else {
                res.send({
                    message: `Cannot delete Setting/preset with id=${id}. Maybe settings/preset was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete settings/preset with id=" + id,
            });
        });
};