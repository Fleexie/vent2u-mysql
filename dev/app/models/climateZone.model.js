"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
module.exports = function (sequelize) {
    var ClimateZone = sequelize.define("climate_zones", {
        climate_zone_ID: {
            type: sequelize_1.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        FK_Room: {
            type: sequelize_1.INTEGER,
        }
    }, {
        timestamps: false
    });
    return ClimateZone;
};
