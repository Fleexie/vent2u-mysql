
const db = require("../models");
const room = db.room;
const Room = room;

exports.getAll = (req, res) => {
    Room.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error : Getting Rooms."
            });
        });
}
exports.add = (req, res) => {

}
exports.delete = (req, res) => {

}
