module.exports = (app) => {
    const rooms = require('../controllers/rooms.controller.js');
    const router = require('express').Router();
  
    router.get('/', rooms.findAll);

    router.post('/', rooms.addRoom);

    app.use("/api/rooms", router);
};
