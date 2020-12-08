const climateZones = require('../../controllers/climateZones.controller.js');

module.exports = (app) => {
  const router = require('express').Router();
  router.get(
      '/climateZoneById/:climate_zone_ID',
      climateZones.getClimateZoneById);
  router.get(
      '/climateZoneByRoomId/:room_ID',
      climateZones.getClimateZoneByRoomId);
  router.get('/climateZones', climateZones.findAll);

  router.post('/climateZones', climateZones.addClimateZone);
  router.delete('/climateZones/:climateZoneId', climateZones.removeClimateZone);

  app.use('/api/', router);
};