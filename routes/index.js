const { Router} = require('express');
const router = Router();

// const AuthorRoutes = require('./author')
// const BookRoutes = require('./book')

router.get('/', (req, res) => {
    res.render("index.ejs")
})

// router.use('/authors', AuthorRoutes)
// router.use('/books', BookRoutes)

module.exports = router
