module.exports = (app) => {
  const room = require("../controllers/room.controller.js");
  const zone = require("../controllers/zone.controller.js");
  const seat = require("../controllers/seat.controller.js");


  var router = require("express").Router();

  // Rooms Routes
  router.get('room', room.findAll);
  router.post('room', room.addRoom);
  router.delete('room/:id', room.removeRoom);

  // Zone Routes
  router.get('zone', zone.findAll);
  router.get('zone/ById/:zone_id', zone.getClimateZoneById);
  router.get('zone/ByRoomId/:room_id', zone.getClimateZoneByRoomId);
  router.post('zone', climateZones.addClimateZone);
  router.delete('zone/:climateZoneId', climateZones.removeClimateZone);

  // Seat Routes
  router.get("seat", seat.findAll);
  router.get('seat/ById/:seat_ID', seat.getSeatById);
  router.get('seat/ByZoneId/:zone_id', seat.getSeatsByClimateZoneId);
  router.post('seat', seat.addSeat);
  router.delete('seat/:seat_id', seat.removeSeat);

  // Master Route
  app.use("/api/", router);
};
