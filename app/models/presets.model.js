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
       Firebase_User_ID: {
            type: Sequelize.STRING,

        },
       FK_Climate_Zone: {
            type: Sequelize.INTEGER,

        },
    }, {
        timestamps: false
    });

    return Preset;
};