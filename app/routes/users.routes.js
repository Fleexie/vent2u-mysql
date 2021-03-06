module.exports = (app) => {
    const users = require("../controllers/users.controller.js");
    var router = require("express").Router();

    // User Routes
    router.post("/", users.create);
    router.get("/", users.findUsers)
    router.get("/:email", users.findAll);
    app.use("/api/users", router);
};