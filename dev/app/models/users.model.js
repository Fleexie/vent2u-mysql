"use strict";
module.exports = function (sequelize, Sequelize) {
    var Register = sequelize.define("users", {
        user_ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING,
            required: true
        },
        password: {
            type: Sequelize.STRING,
            required: true
        }
    }, {
        timestamps: false
    });
    return Register;
};
