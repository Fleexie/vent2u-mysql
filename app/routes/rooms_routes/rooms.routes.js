module.exports = (app) => {
    const rooms = require("../../controllers/rooms.controller.js");
    var router = require("express").Router();

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
    router.get("/", rooms.findAll);

    app.use("/api/rooms", router);
};