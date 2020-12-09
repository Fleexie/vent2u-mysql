module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define("rooms", {
        room_ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            required: true
        }
    }, {
        timestamps: false
    });

    return Room;
};
