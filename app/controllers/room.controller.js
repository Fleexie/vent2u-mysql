const db = require("../models");
const room = db.room;
const Room = room;

exports.findAll = (req, res) => {
    Room.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving settings."
            });
        });
}
exports.add = (req, res) => {

}
exports.delete = (req, res) => {

}
