const db = require('../models');
const rooms = db.rooms;
const Rooms = rooms;

exports.findAll = (req, res) => {
  Rooms.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message ||
                'Some error occurred while retrieving settings.',
        });
      });
};

exports.addRoom = async (req, res) => {
  let {name} = req.body
  Rooms.create({name})
      .then((result) => {
        res.status(201).send(result);
      }).catch((err) => {
        console.log(err);
      });
};

exports.removeRoom = async (req, res) => {
  const {
    id,
  } = req.params;
  await Rooms.destroy({
    where: {
      room_ID: id,
    },
  });

  res.status(200).send({
    room_ID: id,
  });
};