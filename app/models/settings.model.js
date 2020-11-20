module.exports = (sequelize, Sequelize) => {
    const Setting = sequelize.define("setting", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        temperature: {
            type: Sequelize.INTEGER,
            required: true
        },
        humidity: {
            type: Sequelize.INTEGER,
            required: true
        },
        light: {
            type: Sequelize.INTEGER,
            required: true
        },
        uid: {
            type: Sequelize.INTEGER,
            foreignKey: true
        }
    }, {
        timestamps: false
    });

    return Setting;
};