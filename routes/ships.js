const ShipsRoutes = require('express').Router()

const ShipsController = require('../controller/ShipController')

ShipsRoutes.get('/', ShipsController.getShip)
ShipsRoutes.post('/add', ShipsController.insertShip)
ShipsRoutes.get('/add', ShipsController.insertPageShip)
ShipsRoutes.get('/delete/:id', ShipsController.deleteShip)

module.exports = ShipsRoutes