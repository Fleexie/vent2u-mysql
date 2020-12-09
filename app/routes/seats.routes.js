const seats = require('../controllers/seats.controller.js');

module.exports = (app) => {
  const router = require('express').Router();
  router.get(
      '/seatById/:seat_ID',
      seats.getSeatById);

  router.get(
      '/seatsByClimateZoneId/:climate_zone_ID',
      seats.getSeatsByClimateZoneId);
  router.get('/seats', seats.findAll);
  router.post('/seats', seats.addSeat);

  router.delete('/seats/:seat_ID', seats.removeSeat);

  app.use('/api/', router);
};