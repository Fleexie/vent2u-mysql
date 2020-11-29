module.exports = (app) => {
  const rooms = require('../../controllers/rooms.controller.js');
  const router = require('express').Router();

  /**
     * @swagger
     * tags:
     *  name: Rooms
     *  description: API to manage your users.
     */

  /**
     * @swagger
     *
     * /api/rooms:
     *   get:
     *     description: Gets a list of all rooms
     *     produces:
     *       - application/json
     *     tags:
     *       - Rooms
     *     responses:
     *       200:
     *         description: List of all rooms
     */
  router.get('/', rooms.findAll);

  /**
     * @swagger
     *
     * /api/rooms:
     *   post:
     *     description: Adds a room
     *     produces:
     *       - application/json
     *     tags:
     *       - Rooms
     *     responses:
     *       201:
     *         description: Room object
     */
  router.post('/', rooms.addRoom);

  /**
     * @swagger
     *
     * /api/rooms/{room_ID}:
     *   delete:
     *     description: Removes a room
     *     produces:
     *       - application/json
     *     tags:
     *       - Rooms
     *     parameters:
     *       - in: path
     *         name: room_ID
     *         description: ID of a room
     *         required: true
     *         type: integer
     *     responses:
     *       200:
     *         description: Room object
     */
  router.delete('/:id', rooms.removeRoom);

  app.use('/api/rooms', router);
};
