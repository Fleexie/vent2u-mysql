module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define("rooms", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        UID: {
            type: Sequelize.INTEGER,
            foreignKey: true,
            required: false
        }
    }, {
        timestamps: false
    });

    return Room;
};