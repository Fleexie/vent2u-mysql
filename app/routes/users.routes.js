module.exports = app => {
    const users = require("../controllers/users.controller.js");
  
    var router = require("express").Router();
  
    // Create a new settings
    router.post("/", users.create);

    app.use('/api/users', router);
  
  };