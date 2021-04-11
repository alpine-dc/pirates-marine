const ShipsRoute = require('express').Router()

const ShipsController = require('../controllers/ShipsController')
ShipsRoute.get('/', ShipsController.getShip)
ShipsRoute.post('/add', ShipsController.insertShip)
ShipsRoute.get('/add', ShipsController.insertPageShip)
ShipsRoute.get('/delete/:id', ShipsController.deleteShip)

module.exports = ShipsRoute