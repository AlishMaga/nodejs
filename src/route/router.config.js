const router = require('express').Router();
const routes = require('./routecontroller/authcontroller')
const validateInput = require('../modules/middlewares')



router.post('/register',validateInput, routes.register)
router.post('/login', routes.login)

//params
router.get('/user/:id', routes.getUserById)

router.get('/search', routes.search)

router.get('/header', routes.headerParams)

router.put('/body', routes.bodyparam)

module.exports = router;