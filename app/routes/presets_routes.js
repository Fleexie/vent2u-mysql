module.exports = (app) => {
    const presets = require('../controllers/presets.controller.js');
    const router = require('express').Router();

    router.get('/', presets.findAll);
   router.get('/:presetId', presets.getPresetById);
    router.post('/', presets.addPreset);
    router.put('/:presetId', presets.changePreset);
  
    router.delete('/:presetId', presets.removePreset);
  
    app.use('/api/presets/', router);
  };