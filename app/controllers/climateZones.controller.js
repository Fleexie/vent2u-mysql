const {climateZone} = require('../models');

exports.getClimateZoneById = (req, res) => {
  const {
    climate_zone_ID,
  } = req.params;
  if (climate_zone_ID === 0) {
    res.status(400).send({
      message: 'Chose a climate_zone id!',
    });
  }

  climateZone.findByPk(climate_zone_ID).then((data) => {
    res.send(data);
  }).catch(() => {
    res.status(500).send({
      message: `Error retrieving ClimateZone with id=${climate_zone_ID}`,
    });
  });
};

exports.getClimateZoneByRoomId = (req, res) => {
  const room_ID = req.params.room_ID;
  if (room_ID === 0) {
    res.status(400).send({
      message: 'Chose a room_ID id!',
    });
  }

  climateZone.findAll({
    where: {
      FK_Room: room_ID,
    },
  }).then((data) => {
    res.send(data);
  }).catch(() => {
    res.status(500).send({
      message: `Error retrieving ClimateZone with id=${room_ID}`,
    });
  });
};

exports.findAll = (req, res) => {
  climateZone.findAll({}).then((data) => {
    res.send(data);
  }).catch(() => {
    res.status(500).send({
      message: `Error retrieving all ClimateZones`,
    });
  });
};

exports.addClimateZone = async (req, res) => {
  const {
    room_ID,
  } = req.body;
  if (room_ID === undefined) {
    res.status(500).send('room_ID is undefined');
    return;
  }
  const newClimateZone = climateZone.build({FK_Room: room_ID});
  const result = await newClimateZone.save();
  res.status(201).send(result);
};

exports.removeClimateZone = async (req, res) => {
  const {
    climateZoneId,
  } = req.params;
  await climateZone.destroy({
    where: {
      climate_zone_ID: climateZoneId,
    },
  }).then((result) => {
    res.status(200).send({
      climate_zone_ID: climateZoneId,
    });
  }).catch((err) => {
    console.log(err)
    res.send(500).send('internal error occured');
  });
};