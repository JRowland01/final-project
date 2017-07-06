var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

var userSchema = mongoose.Schema({
 title: String,
 lastname: String,
 email: String,
 password: String
});

userSchema.methods.generateHash = function(password){
return bcrypt.hashSync(password, bcrypt, genSaltSync(9));
}


var userModel = mongoose.model('user', userSchema);


module.exports = userModel;