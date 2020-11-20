module.exports = (app) => {
    const rooms = require("../controllers/rooms.controller.js");
    var router = require("express").Router();

    // Rooms Routes
    router.get("/", rooms.findAll);

    app.use("/api/rooms", router);
};