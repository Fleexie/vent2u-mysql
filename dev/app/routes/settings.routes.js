"use strict";
module.exports = function (app) {
    var settings = require("../controllers/settings.controller.js");
    var router = require("express").Router();
    // Create a new settings
    router.post("/", settings.create);
    // Retrieve all settings
    router.get("/:id", settings.findAll);
    // Delete a settings with id
    router.delete("/:id", settings.delete);
    app.use('/api/settings', router);
};
