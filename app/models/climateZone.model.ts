import { INTEGER } from 'sequelize'
module.exports = (sequelize) => {
    const ClimateZone = sequelize.define("climate_zones", {
        climate_zone_ID: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        FK_Room: {
            type: INTEGER,

        }
    }, {
        timestamps: false
    });

    return ClimateZone;
};