module.exports = (sequelize, Sequelize) => {
    const Zone = sequelize.define("zones", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        room_id: {
            type: Sequelize.INTEGER,
            required: true
        },
        airflow: {
            type: Sequelize.INTEGER
        }
    }, {
        timestamps: false
    });

    return Zone;
};
