module.exports = (sequelize, Sequelize) => {
    const Seat = sequelize.define("seats", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        zone_id: {
            type: Sequelize.INTEGER,
            required: true
        },
        room_id: {
            type: Sequelize.INTEGER,
            required: true
        },
        occupied: {
            type: Sequelize.TINYINT,
            default: null
        }
    }, {
        timestamps: false
    });

    return Seat;
};
