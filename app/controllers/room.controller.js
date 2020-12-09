const db = require("../models");
const rooms = db.rooms;
const Rooms = rooms;

exports.findAll = (req, res) => {
    Rooms.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving settings."
            });
        });
}