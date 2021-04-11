const {Pirates, Ships} = require('../models')
const Model = require('../models')

class ShipController {
    static getShip(req, res) {
        // res.send("Pirates Page")
        Ships.findAll({
            include: [
                Pirates
            ],
            order: [
                ['id', 'ASC']
            ]
        })
            .then(data => {
                res.render('ships.ejs', {data})
            })
            .catch(err => {
                res.send(err)
            })
    }
    static insertPageShip(req, res) {
        Pirates.findAll()
            .then((data) => {
                res.render('addShips.ejs', {data} )
            })
            .catch((err) => res.send(err))
        
    }
    static insertShip(req,res) {
        Ships.create(
            req.body
        ).then(pirate => {
            res.redirect('/ships')
        }).catch(err => {
            res.send(err)
        })
    }
    static deleteShip(req,res) {
        const id = +req.params.id;
        Ships.destroy({
            where: {
                id
            }
        }).then(() => {
            res.redirect('/ships')
        }).catch(err => {
            res.send(err)
        })
    }
}


module.exports = ShipController;