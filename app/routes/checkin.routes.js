module.exports = (app) => {
  const room = require("../controllers/room.controller.js");
  const zone = require("../controllers/zone.controller.js");
  const seat = require("../controllers/seat.controller.js");


  var router = require("express").Router();

  // Rooms Routes
  router.get('/room', room.getAll);
  router.post('/room', room.add);
  router.delete('/room/:id', room.delete);

  // Zone Routes
  router.get('/zone/:room_id', zone.getAll);
  router.post('/zone', zone.add);
  router.delete('/zone/:climateZoneId', zone.delete);

  // Seat Routes
  router.get("/seat/:room_id", seat.getAll);
  router.post('/seat', seat.add);
  router.delete('/seat/:seat_id', seat.delete);

  // Master Route
  app.use("/api", router);
};
