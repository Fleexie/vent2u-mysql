module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define("rooms", {
        room_ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING

    }, {
        timestamps: false
    });

    return Room;
};