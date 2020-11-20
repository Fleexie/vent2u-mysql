import { rooms } from "../models";
const Rooms = rooms;

export function findAll(req, res) {
    Rooms.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving settings."
            });
        });
}