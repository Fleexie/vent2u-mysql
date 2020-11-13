module.exports = (sequelize, Sequelize) => {
    const Setting = sequelize.define("savedSetting", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        temperature: {
            type: Sequelize.FLOAT
        },
        humidity: {
            type: Sequelize.FLOAT
        },
        light: {
            type: Sequelize.STRING
        },
        uid: {
            type: Sequelize.INTEGER,
            foreignKey: true
        }
    });

    return Setting;
};