const router = require('express').Router(),
    routerUser = require('./user'),
    routerApod = require('./apod'),
    authentication = require('../middleware/auth')

router.use('/users', routerUser)

// router.use('', )

router.use('/apods',authentication.tokencheck, routerApod)

module.exports = router