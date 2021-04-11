const { Router} = require('express'); // import Router & framwork express
const router = Router();


const ShipsRoutes = require('./ships')
router.get('/', (req, res) => {
    res.render("index.ejs")      //view file index
})
router.use('/ships', ShipsRoutes)
// router.use('/pirates', PirateRoutes)
module.exports = router