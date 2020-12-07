module.exports = (sequelize, Sequelize) => {
    const ClimateZone = sequelize.define("climate_zones", {
        climate_zone_ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        FK_Room: {
            type: Sequelize.INTEGER,

        }
    }, {
        timestamps: false
    });

    return ClimateZone;
};