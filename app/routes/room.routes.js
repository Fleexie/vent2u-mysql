module.exports = (app) => {
    const rooms = require("../controllers/room.controller.js");
    var router = require("express").Router();

    // Rooms Routes
    router.get("/", rooms.findAll);

    app.use("/api/rooms", router);
};
