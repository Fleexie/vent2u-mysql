
const db = require('../models');
const Preset = db.preset;


exports.getInfo = (req, res) => {
    const user_id = req.params.user_id;
    Preset.findAll( { where : { user_id: user_id }})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error : Getting Specific Preset."
            });
        });
}
exports.add = (req, res) => {

}
exports.putInfo = (req, res) => {
    const user_id = req.params.user_id;
    Preset.update(req.body, {
        where: { user_id },
    })
        .then((num) => {
            if (num[0] === 1) {
                res.send({
                    message: 'Presets was updated successfully.',
                });
            } else {
                res.send({
                    message: `Cannot update Presets with id=${user_id}. Maybe Preset was not found or req.body is empty!`,
                });
            }
        })
        .catch(() => {
            res.status(500).send({
                message: `Error updating Preset with id=${user_id}`,
            });
        });
}
exports.delete = (req, res) => {

}
