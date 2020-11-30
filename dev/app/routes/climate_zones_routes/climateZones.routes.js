"use strict";
/* eslint-disable new-cap */
var climateZones = require('../../controllers/climateZones.controller.js');
module.exports = function (app) {
    var router = require('express').Router();
    /**
       * @swagger
       * tags:
       *  name: ClimateZones
       *  description: API to manage your users.
       */
    /**
         * @swagger
         *
         * /api/climateZoneById/{climate_zone_ID}:
         *   get:
         *     description: Gets a Climate zone by id
         *     produces:
         *       - application/json
         *     tags:
         *       - ClimateZones
         *     parameters:
         *       - in: path
         *         name: climate_zone_ID
         *         description: ID of a climate zone
         *         required: true
         *         type: integer
         *     responses:
         *       200:
         *         description: Climate zone ID
         */
    router.get('/climateZoneById/:climate_zone_ID', climateZones.getClimateZoneById);
    /**
       * @swagger
       *
       * /api/climateZoneByRoomId/{room_ID}:
       *   get:
       *     description: Gets a list of all climateZones by room id
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
    router.get('/climateZoneByRoomId/:room_ID', climateZones.getClimateZoneByRoomId);
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
    router.get('/climateZones', climateZones.findAll);
    /**
       * @swagger
       *
       * /api/climateZones:
       *   post:
       *     description: Adds a preset
       *     produces:
       *       - application/json
       *     tags:
       *       - ClimateZones
       *     requestBody:
       *       content:
       *         application/json:
       *           schema:
       *             type: object
       *             properties:
       *               room_ID:
       *                 type: integer
       *     responses:
       *       200:
       *         description: List of all preset
       */
    router.post('/climateZones', climateZones.addClimateZone);
    /**
       * @swagger
       *
       * /api/climateZones/{climate_zone_ID}:
       *   delete:
       *     description: Adds a climate zone
       *     produces:
       *       - application/json
       *     tags:
       *       - ClimateZones
       *     parameters:
       *       - in: path
       *         name: climate_zone_ID
       *         description: ID of a room
       *         required: true
       *         type: integer
       *     responses:
       *       200:
       *         description: List of all preset
       */
    router.delete('/climateZones/:climateZoneId', climateZones.removeClimateZone);
    app.use('/api/', router);
};
