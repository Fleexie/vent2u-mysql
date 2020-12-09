module.exports = (sequelize, Sequelize) => {
    const Seat = sequelize.define("seats", {
        seat_ID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        FK_Climate_Zone: {
            type: Sequelize.INTEGER,

        }
    }, {
        timestamps: false
    });

    return Seat
}