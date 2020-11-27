module.exports = (sequelize, Sequelize) => {
    const Preset = sequelize.define("presets", {
        preset_ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        airflow: {
            type: Sequelize.INTEGER,

        },
        FK_User: {
            type: Sequelize.INTEGER,

        },
        FK_Climate_Zone: {
            type: Sequelize.INTEGER,

        }
    }, {
        timestamps: false
    });

    return Preset;
};