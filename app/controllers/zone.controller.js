const db = require("../models");
const zone = db.zone;
const Zone = zone;

exports.getAll = (req, res) => {
    const room_id = req.params.room_id;
    Zone.findAll( { where : { room_id: room_id }})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error : Getting Zones."
            });
        });
}
exports.add = (req, res) => {

}
exports.delete = (req, res) => {

}
