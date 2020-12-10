module.exports = (app) => {
  const room = require("../controllers/room.controller.js");
  const zone = require("../controllers/zone.controller.js");
  const seat = require("../controllers/seat.controller.js");


  var router = require("express").Router();

  // Rooms Routes
  router.get('room', room.findAll);
  router.post('room', room.add);
  router.delete('room/:id', room.delete);

  // Zone Routes
  router.get('zone', zone.findAll);
  router.get('zone/ById/:zone_id', zone.findById);
  router.get('zone/ByRoomId/:room_id', zone.findByRoom);
  router.post('zone', zone.add);
  router.delete('zone/:climateZoneId', zone.delete);

  // Seat Routes
  router.get("seat", seat.findAll);
  router.get('seat/ById/:seat_ID', seat.findById);
  router.get('seat/ByZoneId/:zone_id', seat.findByZone);
  router.post('seat', seat.add);
  router.delete('seat/:seat_id', seat.delete);

  // Master Route
  app.use("/api/", router);
};
