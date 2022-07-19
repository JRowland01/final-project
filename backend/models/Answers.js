var mongoose = require('mongoose');

var answerSchema = mongoose.Schema({
 user_id: String,
 lesson_id: String,	
 answer_one: String,
 answer_two: String,
 answer_three: String,
 answer_four: String
});

var answerModel = mongoose.model('answer', answerSchema);
module.exports = answerModel;