const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
// To make it more simple, we made our Seq refer to our config files.
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    port: config.PORT,
      pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
      }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.room = require("./room.model.js")(sequelize, Sequelize);
db.zone = require("./zone.model.js")(sequelize, Sequelize);
db.seat = require("./seat.model.js")(sequelize, Sequelize);
db.preset = require("./preset.model.js")(sequelize, Sequelize);
//  We use Users.belongsToMany(Role) to indicate that the user model can belong to many Roles and vice versa.

//  The association between Users and Roles is Many-to-Many relationship:
//  – One User can have several Roles.
//  – One Role can be taken on by many Users.
// db.role.belongsToMany(db.user, {
//     through: "user_roles",
//     foreignKey: "roleId",
//     otherKey: "userId"
// });
// db.user.belongsToMany(db.role, {
//     through: "user_roles",
//     foreignKey: "userId",
//     otherKey: "roleId"
// });

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
