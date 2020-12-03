module.exports = (app) => {
  const presets = require('../../controllers/presets.controller.js');
  const router = require('express').Router();

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
  router.get('/', presets.findAll);

  /**
   * @swagger
   *
   * /api/presets/{preset_ID}:
   *   get:
   *     description: Get a preset with particular ID
   *     produces:
   *       - application/json
   *     tags:
   *       - Presets
   *     parameters:
   *       - in: path
   *         name: preset_ID
   *         description: ID of a preset
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: List of all presets
  */
 router.get('/:presetId', presets.getPresetById);

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
  router.post('/', presets.addPreset);

  /**
     * @swagger
     *
     * /api/presets/{preset_ID}:
     *   put:
     *     description: Changes a preset
     *     produces:
     *       - application/json
     *     tags:
     *       - Presets
     *     parameters:
     *       - in: path
     *         name: preset_ID
     *         description: ID of a preset
     *         required: true
     *         type: integer
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               airflow:
     *                 type: integer
     *     responses:
     *       200:
     *         description: List of all preset
     */
  router.put('/:presetId', presets.changePreset);

  /**
     * @swagger
     *
     * /api/presets/{preset_ID}:
     *   delete:
     *     description: Adds a preset
     *     produces:
     *       - application/json
     *     tags:
     *       - Presets
     *     parameters:
     *       - in: path
     *         name: preset_ID
     *         description: ID of a preset
     *         required: true
     *         type: integer
     *     responses:
     *       200:
     *         description: List of all preset
     */
  router.delete('/:presetId', presets.removePreset);

  app.use('/api/presets/', router);
};
