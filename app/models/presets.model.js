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
        uid: {
            type: Sequelize.STRING,

        },
       room : {
            type: Sequelize.INTEGER,

        },
        zone : {
            type: Sequelize.INTEGER,

        }
    }, {
        timestamps: true
    });

    return Preset;
};