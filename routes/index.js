const { Router} = require('express');
const router = Router();

// const ShipRoutes = require('./ship')
const PirateRoutes = require('./pirate')
const ShipsRoutes = require('./ships')

router.get('/', (req, res) => {
    res.render("index.ejs")
})

// router.use('/ship', ShipRoutes)
router.use('/pirates', PirateRoutes)
router.use('/ships', ShipsRoutes)

module.exports = router