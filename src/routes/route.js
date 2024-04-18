const express = require('express');
const mainQuizController = require('../controllers/mainController');
const router = express.Router();



router.get('/', mainQuizController.mainFile);

router.get('/quiz', mainQuizController.mainQuiz)

router.post('/result',mainQuizController.getResult);

router.get('/reload',mainQuizController.reload);

// Define other chat routes...

module.exports = router;