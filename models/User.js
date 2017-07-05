var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
 title: String,
 lastname: String,
 email: String,
 password: String
});

var userModel = mongoose.model('user', userSchema);
module.exports = userModel;