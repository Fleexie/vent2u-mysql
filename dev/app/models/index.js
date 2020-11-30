"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var sequilizeOptions = {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: process.env.NODE_ENV === 'test' ? false : true,
};
var sequelize = new sequelize_1.Sequelize('ventk2', 'root', '', sequilizeOptions);
var db = {
    sequelize: sequelize,
};
db.sequelize = sequelize;
db.settings = require('./settings.model.js')(sequelize);
db.users = require('./users.model.js')(sequelize);
db.rooms = require('./rooms.model.js')(sequelize);
db.climateZone = require('./climateZone.model.js')(sequelize);
db.preset = require('./presets.model.js')(sequelize);
module.exports = db;
