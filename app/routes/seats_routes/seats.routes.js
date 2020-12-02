/* eslint-disable new-cap */
const seats = require('../../controllers/seats.controller.js');

module.exports = (app) => {
  const router = require('express').Router();

  /**
     * @swagger
     * tags:
     *  name: Seats
     *  description: API to manage your users.
     */

  /**
       * @swagger
       *
       * /api/seatById/{seat_ID}:
       *   get:
       *     description: Gets a Seat by id
       *     produces:
       *       - application/json
       *     tags:
       *       - Seats
       *     parameters:
       *       - in: path
       *         name: seat_ID
       *         description: ID of a seat
       *         required: true
       *         type: integer
       *     responses:
       *       200:
       *         description: Seat object
       */
  router.get(
      '/seatById/:seat_ID',
      seats.getSeatById);

  /**
     * @swagger
     *
     * /api/seatsByClimateZoneId/{climate_zone_ID}:
     *   get:
     *     description: Gets a list of all seats by climate zone ID
     *     produces:
     *       - application/json
     *     tags:
     *       - Seats
     *     parameters:
     *       - in: path
     *         name: climate_zone_ID
     *         description: ID of a climate_zone
     *         required: true
     *         type: integer
     *     responses:
     *       200:
     *         description: List of all seats with a particular climate zone id
     */
  router.get(
      '/seatsByClimateZoneId/:climate_zone_ID',
      seats.getSeatsByClimateZoneId);

  /**
     * @swagger
     *
     * /api/seats:
     *   get:
     *     description: Gets a list of all seats
     *     produces:
     *       - application/json
     *     tags:
     *       - Seats
     *     responses:
     *       200:
     *         description: List of all seats
     */
  router.get('/seats', seats.findAll);

  /**
     * @swagger
     *
     * /api/seats:
     *   post:
     *     description: Adds a seat
     *     produces:
     *       - application/json
     *     tags:
     *       - Seats
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               climate_zone_ID:
     *                 type: integer
     *     responses:
     *       200:
     *         description: List of all preset
     */
  router.post('/seats', seats.addSeat);

  /**
     * @swagger
     *
     * /api/seats/{seat_ID}:
     *   delete:
     *     description: Removes a seat
     *     produces:
     *       - application/json
     *     tags:
     *       - Seats
     *     parameters:
     *       - in: path
     *         name: seat_ID
     *         description: ID of a room
     *         required: true
     *         type: integer
     *     responses:
     *       200:
     *         description: List of all preset
     */
  router.delete('/seats/:seat_ID', seats.removeSeat);

  app.use('/api/', router);
};
