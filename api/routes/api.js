const express = require('express')
const router = express.Router()
const questions = require('../controllers/questions')
const answers = require('../controllers/answers')

router.post('/questions', questions.create)
router.get('/questions', questions.read)
router.put('/questions/:id', questions.update)
router.delete('/questions/:id', questions.delete)

router.post('/answers', answers.create)
router.get('/answers', answers.read)
router.put('/answers/:id', answers.update)
router.delete('/answers/:id', answers.delete)

module.exports = router
