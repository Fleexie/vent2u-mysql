module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define("rooms", {
        id: {
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
