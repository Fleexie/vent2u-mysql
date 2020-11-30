import { Model, Options, Sequelize } from 'sequelize'
const sequilizeOptions: Options = {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logging: process.env.NODE_ENV === 'test' ? false : true,
}
const sequelize = new Sequelize('ventk2', 'root', '', sequilizeOptions);

const db: IDatabase = {
  sequelize,

};

db.sequelize = sequelize;

db.settings = require('./settings.model.js')(sequelize);
db.users = require('./users.model.js')(sequelize);
db.rooms = require('./rooms.model.js')(sequelize);
db.climateZone = require('./climateZone.model.js')(sequelize);
db.preset = require('./presets.model.js')(sequelize);

module.exports = db;

interface IDatabase { 
  Sequelize: Sequelize,
  sequelize: typeof sequelize,
  settings: Model,
  users: Model,
  rooms: Model,
  climateZone: Model,
  preset: Model
}