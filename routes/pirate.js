const PirateRoute = require('express').Router()

const PirateController = require('../controller/PirateController')

PirateRoute.get('/', PirateController.getPirates)
PirateRoute.post('/add', PirateController.insertPirate)
PirateRoute.get('/add', PirateController.insertPagePirate)
PirateRoute.get('/delete/:id', PirateController.deletePirate)

module.exports = PirateRoute