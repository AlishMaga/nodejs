const router = require('express').Router();
const routes = require('./routecontroller/authcontroller')



router.post('/register', routes.register)
router.post('/login', routes.login)


module.exports = router;