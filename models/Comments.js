var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
 user_name: String,
 lesson_id: String,
 time_stamp: Date,
 comment_text: String
});

var userModel = mongoose.model('Comments', userSchema);
module.exports = userModel;