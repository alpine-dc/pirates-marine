const {Pirates, Ships} = require('../models')
const Model = require('../models')

class PirateController {
    static getPirates(req, res) {
        // res.send("Pirates Page")
        Pirates.findAll({
            include: [
                Ships
            ],
            order: [
                ['id', 'ASC']
            ]
        })
            .then(pirates => {
                res.render('pirate.ejs', {pirates})
            })
            .catch(err => {
                res.send(err)
            })
    }
    static insertPagePirate(req, res) {
        Ships.findAll()
            .then((data) => {
                res.render('addPirate.ejs', {data} )
            })
            .catch((err) => res.send(err))
        
    }
    static insertPirate(req,res) {
        Pirates.create(
            req.body
        ).then(pirate => {
            res.redirect('/pirates')
        }).catch(err => {
            res.send(err)
        })
    }
    static deletePirate(req,res) {
        const id = +req.params.id;
        Pirates.destroy({
            where: {
                id
            }
        }).then(() => {
            res.redirect('/pirates')
        }).catch(err => {
            res.send(err)
        })
    }
}


module.exports = PirateController;