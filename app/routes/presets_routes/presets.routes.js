module.exports = (app) => {
    const presets = require("../../controllers/presets.controller.js");
    var router = require("express").Router();

    /**
     * @swagger
     * tags: 
     *  name: Presets
     *  description: API to manage your users.
     */

    /**
     * @swagger
     *
     * /api/presets:
     *   get:
     *     description: Gets a list of all presets
     *     produces:
     *       - application/json
     *     tags:
     *       - Presets
     *     responses:
     *       200:
     *         description: List of all presets
     */
    router.get("/", presets.findAll);

    /**
     * @swagger
     *
     * /api/presets:
     *   post:
     *     description: Adds a preset
     *     produces:
     *       - application/json
     *     tags:
     *       - Presets
     *     requestBody:
     *       content:
     *         application/json:  
     *           schema:
     *             type: object
     *             properties:
     *               airflow:
     *                 type: integer
     *               FK_User:
     *                 type: integer
     *               FK_Climate_Zone:
     *                 type: integer
     *     responses:
     *       200:
     *         description: List of all preset
     */
    router.post("/", presets.addPreset);

    app.use("/api/presets", router);
};