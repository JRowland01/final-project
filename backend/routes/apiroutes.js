var express = require("express");
var UserController = require('../controllers/usercontroller');
var LessonController = require('../controllers/lessoncontroller');

var router = new express.Router();

//API endpoints
router.post('/register', UserController.register);

router.post('/login', UserController.login);

router.get('/lesson/:lessonId', LessonController.getALesson);

router.get('/lessons', LessonController.getAll)

router.post('/answer', LessonController.answerLesson);

router.post('/hassubmitted', LessonController.hasAnsweredLesson);

module.exports = router;
