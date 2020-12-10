module.exports = (sequelize, Sequelize) => {
    const Seat = sequelize.define("seats", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        zone: {
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
