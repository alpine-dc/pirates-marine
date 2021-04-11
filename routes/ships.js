const ShipsRoutes = require('express').Router()

const ShipsController = require('../controller/ShipContrller')

PirateRoute.get('/', ShipsController.getShips)
PirateRoute.post('/add', ShipsController.insertShip)
PirateRoute.get('/add', ShipsController.insertPageShip)
PirateRoute.get('/delete/:id', ShipsController.deleteShip)

module.exports = ShipsRoutes