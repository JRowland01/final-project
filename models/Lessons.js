var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
 title: String,
 lesson_text: String,
 question_one: String,
 question_two: String,
 question_three: String,
 question_four: String
});

var userModel = mongoose.model('Lessons', userSchema);
module.exports = userModel;