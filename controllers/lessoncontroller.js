var lessonsModel = require('../models/Lessons');
var answerModel = require('../models/Answers');
var jwt = require('jsonwebtoken');
const LessonController = {
	getAll: function(req, res) {
		//Allows all of the content retrieved from MongoDB to appear in the Lessons webpage.
		lessonsModel.find({}, function(err, lessons) {
			if(err) {
				res.json({status: false, message: "Internal server error"})
			} else {
				res.json({status: true, lessons})
			}
		});
	},
	//Retrieves information about a particular lesson.
	getALesson: function(req, res) {
		lessonsModel.findOne({_id: req.params.lessonId}, function(err, lesson) {
			if(err) {
				res.json({status: false, message: "Internal server error"});
			} else {
				res.json({status: true, lesson})
			}
		})
	},
	//The user submits the answer for a lesson.
	answerLesson: function(req, res) {
		var userId;
		jwt.verify(req.headers.authorization, 'SECRET', function(err, decoded) {
			
		//If the user's token has expired, an unauthorized status will appear
			if(err) {
				res.json({status: false, message: 'Unauthorized'});
			} else {
				userId = decoded.user._id;
				answerModel.findOne({user_id: userId, lesson_id: req.body.lessonId}, function(err, answer) {
					if(answer) {
						res.json({status: false, message: 'You have already answered this lesson'});
					} else {
						var answer = new answerModel();
						answer.answer_one = req.body.answer1;
						answer.answer_two = req.body.answer2;
						answer.answer_three = req.body.answer3;
						answer.answer_four = req.body.answer4;
						answer.lesson_id = req.body.lessonId;
						answer.user_id = userId;
						if(answer.save()) {
							res.json({status: true, message: 'Answer has been submitted'});
						} else {
							res.json({status: false, message: 'Answer not submitted'});
						}
					}
				})
			}
		})
	}
}



module.exports = LessonController