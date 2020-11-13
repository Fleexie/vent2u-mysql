const Sequelize = require("sequelize");
const sequelize = new Sequelize('venttestdb', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.settings = require("./settings.model.js")(sequelize, Sequelize);

module.exports = db;