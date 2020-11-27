/* eslint-disable camelcase */
const { climateZone } = require('../models');

exports.getInfo = (req, res) => {
    const testClimateZoneId = req.params.id;
    if (testClimateZoneId === 0) {
        res.status(400).send({
            message: 'Chose a climate_zone id!',
        });
    }

    climateZone.findByPk(testClimateZoneId).then((data) => {
        res.send(data);
    }).catch(() => {
        res.status(500).send({
            message: `Error retrieving ClimateZone with id=${testClimateZoneId}`,
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
            FK_Room: room_ID
        }
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
        room_ID
    } = req.body
    const newClimateZone = ClimateZone.build({ FK_Room:room_ID});
    const result = await newClimateZone.save();
    res.status(201).send(result);
};

exports.removeClimateZone = async (req, res) => {
    const {
        id
    } = req.params;
    await ClimateZone.destroy({
        where: {
            climate_zone_ID: id,
        },
    });

    res.status(200).send({
        climate_zone_ID: id
    });
};
