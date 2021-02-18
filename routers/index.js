const Controller = require('../controllers/index')
const router = require('express').Router()

router.get('/quiz',Controller.fetchQuiz)

module.exports = router