/* eslint-disable camelcase */
const {seat} = require('../models');

exports.getSeatById = (req, res) => {
  const {
    seat_ID,
  } = req.params;
  if (seat_ID === 0) {
    res.status(400).send({
      message: 'Chose a seat id!',
    });
  }

  seat.findByPk(seat_ID).then((data) => {
    res.send(data);
  }).catch(() => {
    res.status(500).send({
      message: `Error retrieving seat with id=${seat_ID}`,
    });
  });
};

exports.getSeatsByClimateZoneId = (req, res) => {
  const climate_zone_ID = req.params.climate_zone_ID;
  if (climate_zone_ID === 0) {
    res.status(400).send({
      message: 'Chose a climate_zone_ID id!',
    });
  }

  seat.findAll({
    where: {
      FK_Climate_Zone: climate_zone_ID,
    },
  }).then((data) => {
    res.send(data);
  }).catch(() => {
    res.status(500).send({
      message: `Error retrieving Seat with id=${climate_zone_ID}`,
    });
  });
};

exports.findAll = (req, res) => {
  seat.findAll({}).then((data) => {
    res.send(data);
  }).catch(() => {
    res.status(500).send({
      message: `Error retrieving all Seats`,
    });
  });
};

exports.addSeat = async (req, res) => {
  const {
    climate_zone_ID,
  } = req.body;
  if (climate_zone_ID === undefined) {
    res.status(500).send('room_ID is undefined');
    return;
  }
  const newSeat = seat.build({FK_Climate_Zone: climate_zone_ID});
  const result = await newSeat.save();
  res.status(201).send(result);
};

exports.removeSeat = async (req, res) => {
  const {
    seat_ID,
  } = req.params;
  await seat.destroy({
    where: {
      seat_ID: seat_ID,
    },
  }).then((result) => {
    res.status(200).send({
      seat_ID: seat_ID,
    });
  }).catch((err) => {
    res.send(500).send('internal error occured');
  });
};
