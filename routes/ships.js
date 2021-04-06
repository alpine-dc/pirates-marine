const ShipsRouters = require('express').Router();

const ShipsController = require('../controllers/ShipsController')

ShipsRouters.get('/',ShipsController.getShips)
ShipsRouters.get('/create',ShipsController.insertShips)
ShipsRouters.get('/create',ShipsController.insertpageShips)

module.exports = ShipsRouters
