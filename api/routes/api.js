const express = require('express')
const router = express.Router()
const users = require('../controllers/users')
const questions = require('../controllers/questions')
const answers = require('../controllers/answers')

router.post('/users', users.create)
router.get('/users', users.read)
router.put('/users/:id', users.update)
router.delete('/users/:id', users.delete)

router.post('/questions', questions.create)
router.get('/questions', questions.read)
router.put('/questions/:id', questions.update)
router.delete('/questions/:id', questions.delete)

router.post('/answers', answers.create)
router.get('/answers', answers.read)
router.put('/answers/:id', answers.update)
router.delete('/answers/:id', answers.delete)

module.exports = router
