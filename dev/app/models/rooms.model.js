"use strict";
module.exports = function (sequelize, Sequelize) {
    var Room = sequelize.define("rooms", {
        room_ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    }, {
        timestamps: false
    });
    return Room;
};
