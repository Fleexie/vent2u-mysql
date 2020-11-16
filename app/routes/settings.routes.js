module.exports = app => {
    const settings = require("../controllers/settings.controller.js");
  
    var router = require("express").Router();
  
    // Create a new settings
    router.post("/", settings.create);
  
    // Retrieve all settings
    router.get("/:id", settings.findAll);

    // Retrieve a single settings with id
    // router.get("/:id", settings.findOne);
  
    // Delete a settings with id
    router.delete("/:id", settings.delete);
  
    app.use('/api/settings', router);
  };