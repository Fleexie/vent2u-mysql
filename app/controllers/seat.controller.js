const db = require("../models");
const seat = db.seat;
const Seat = seat;

exports.getAll = (req, res) => {
    const room_id = req.params.room_id;
    Seat.findAll( { where : { room_id: room_id }})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error : Getting Specific Zones."
            });
        });
}
exports.add = (req, res) => {

}
exports.delete = (req, res) => {

}
