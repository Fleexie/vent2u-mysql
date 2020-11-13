const Sequelize = require("sequelize");
const sequelize = new Sequelize('ventk2', 'root', '', {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.settings = require("./settings.model.js")(sequelize, Sequelize);
db.users = require("./users.model.js")(sequelize, Sequelize);

module.exports = db;