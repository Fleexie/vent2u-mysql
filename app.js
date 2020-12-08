const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const options = require('./swagger.options.js');
const app = express();
app.use(cors());

const db = require('./app/models');

db.sequelize.sync();
const specs = swaggerJsdoc(options);

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({
  extended: true,
}));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/', (req, res) => {
  res.json({
    message: 'Vent2U Group Anina, Mathias and Jannick',
  });
});

require('./app/routes/settings.routes')(app);
require('./app/routes/users_routes/users.routes')(app);
require('./app/routes/rooms_routes/rooms.routes')(app);
require('./app/routes/climate_zones_routes/climateZones.routes')(app);
require('./app/routes/presets_routes.js/presets.routes')(app);
require('./app/routes/seats_routes/seats.routes')(app);

module.exports = app;
