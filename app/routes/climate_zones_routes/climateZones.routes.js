const climateZones = require("../../controllers/climateZones.controller.js");

module.exports = (app) => {
    var router = require("express").Router();

    /**
     * @swagger
     * tags: 
     *  name: ClimateZones
     *  description: API to manage your users.
     */

    /**
     * @swagger
     *
     * /api/climateZoneByRoomId/{room_ID}:
     *   get:
     *     description: Gets a list of all rooms
     *     produces:
     *       - application/json
     *     tags:
     *       - ClimateZones
     *     parameters:
     *       - in: path
     *         name: room_ID
     *         description: ID of a room  
     *         required: true
     *         type: integer
     *     responses:
     *       200:
     *         description: List of all climate zones with a particular room id
     */
    router.get("/climateZoneByRoomId/:room_ID", climateZones.getClimateZoneByRoomId);

    /**
     * @swagger
     *
     * /api/climateZones:
     *   get:
     *     description: Gets a list of all climate Zones
     *     produces:
     *       - application/json
     *     tags:
     *       - ClimateZones
     *     responses:
     *       200:
     *         description: List of all rooms
     */
    router.get("/climateZones", climateZones.findAll);

    app.use("/api/", router);
};