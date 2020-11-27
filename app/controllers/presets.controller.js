/* eslint-disable camelcase */
const { preset } = require('../models');

exports.getInfo = (req, res) => {
    const testPresetId = req.params.id;
    if (testPresetId === 0) {
        res.status(400).send({
            message: 'Chose a climate_zone id!',
        });
    }

    preset.findByPk(testPresetId).then((data) => {
        res.send(data);
    }).catch(() => {
        res.status(500).send({
            message: `Error retrieving Preset with id=${testPresetId}`,
        });
    });
};

exports.getPresetByRoomId = (req, res) => {
    const room_ID = req.params.room_ID;
    if (room_ID === 0) {
        res.status(400).send({
            message: 'Chose a room_ID id!',
        });
    }

    preset.findAll({
        where: {
            FK_Room: room_ID
        }
    }).then((data) => {
        res.send(data);
    }).catch(() => {
        res.status(500).send({
            message: `Error retrieving Preset with id=${room_ID}`,
        });
    });
};

exports.findAll = (req, res) => {


    preset.findAll({}).then((data) => {
        res.send(data);
    }).catch(() => {
        res.status(500).send({
            message: `Error retrieving all Presets`,
        });
    });
};

exports.addPreset = async (req, res) => {
    const {
        airflow,
        FK_User,
        FK_Climate_Zone
    } = req.body
    const newPreset = preset.create(
        {
            airflow,
            FK_User,
            FK_Climate_Zone
        }).then((result) => { 
            res.status(201).send(result);
        }).catch(err => { 
            console.log(err)
        });
};

exports.removePreset = async (req, res) => {
    const {
        id
    } = req.params;
    await preset.destroy({
        where: {
            Preset_ID: id,
        },
    });

    res.status(200).send({
        Preset_ID: id
    });
};
