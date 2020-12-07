module.exports = (app) => {
  const users = require('../../controllers/users.controller.js');
  const router = require('express').Router();

  /**
   * @swagger
   * tags:
   *  name: Users
   *  description: API to manage your users.
   */

  /**
    * @swagger
    *
    * /api/users:
    *   post:
    *     description: Adds a room
    *     produces:
    *       - application/json
    *     tags:
    *       - Users
    *     requestBody:
    *       content:
    *         application/json:
    *           schema:
    *             type: object
    *             properties:
    *               username:
    *                 type: string
    *               password:
    *                 type: string
    *     responses:
    *       201:
    *         description: Room object
    */
  router.post('/', users.create);

  /**
     * @swagger
     *
     * /api/users/{username}:
     *   get:
     *     description: Gets a list of users per username
     *     produces:
     *       - application/json
     *     tags:
     *       - Users
     *     parameters:
     *       - in: path
     *         name: username
     *         description: name of a user
     *         required: true
     *         type: integer
     *     responses:
     *       200:
     *         description: List of all users per username
     */
  router.get('/:username', users.findAll);
  app.use('/api/users', router);
};
