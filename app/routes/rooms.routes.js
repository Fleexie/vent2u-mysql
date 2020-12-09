module.exports = (app) => {
    const rooms = require('../controllers/rooms.controller.js');
    const router = require('express').Router();
  
    router.get('/', rooms.findAll);

    router.post('/', rooms.addRoom);

    router.delete('/:id', rooms.removeRoom);
  
    app.use('/api/rooms', router);
  };