module.exports = (sequelize, Sequelize) => {
    const Preset = sequelize.define("presets", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        airflow: {
            type: Sequelize.INTEGER
        },
        user_id: {
            type: Sequelize.INTEGER
        },
        zone_id: {
            type: Sequelize.INTEGER
        }
    }, {
        timestamps: false
    });

    return Preset;
};
