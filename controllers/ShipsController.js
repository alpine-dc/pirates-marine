const{Ships} = require('../models')

class ShipsController{
    static get  Ships(req,res){
        Ships.findAll({
            include : [ ], // untuk pritama
            order   :[
                     ['id','ASC']
                     ]
        })

        .then(ships => {
            res.send(ships)
        })
        .catch(err =>{
            res.send(err)
        })
    }
    static 
}
module.exports = ShipsController;