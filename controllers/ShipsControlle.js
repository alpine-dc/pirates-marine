const { Ships } = require('../models')

class ShipsController {
    static getShip(req, res) {
        // res.send("Ships Home Page")
        Ships.findAll({
            include: [
                Ships
            ],
            order: [
                ['id', 'ASC']
            ]
        })
            .then(ships => {
                // res.send(ships)
                res.render('ship.ejs', { ships })
                // console.log("hai")
            })
            .catch(err => {
                res.send(err)
            })
    }
    static insertPageShip(req, res) {
        Ships.findAll()
            .then((data) => {
                res.render('addShip.ejs', {data} )
            })
            .catch((err) => res.send(err))
        
        // res.render('addShip.ejs')
    }
    static insertShip(req, res) {
        const { name, type, power } = req.body
        Ships.create({
            name, type, power
        }).then(ship => {
            // res.send(ships)
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
            // res.send(`Id ${id} done!`)
            res.redirect('/ships')
        }).catch(err => {
            res.send(err)
        })
    }
 }

module.exports = ShipsController;