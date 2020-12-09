const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());

const db = require('./app/models');

db.sequelize.sync();

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({
  extended: true,
}));
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/', (req, res) => {
  res.json({
    message: 'Vent2U Group Anina, Mathias and Jannick',
  });
});

require('./app/routes/settings.routes')(app);
require('./app/routes/users.routes')(app);
require('./app/routes/rooms.routes')(app);
require('./app/routes/climateZones.routes')(app);
require('./app/routes/presets_routes')(app);
require('./app/routes/seats.routes')(app);

module.exports = app;
