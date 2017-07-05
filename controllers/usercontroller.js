var userModel = require('../models/User');
var jwt = require('jsonwebtoken');
const UserController = {
	register: function(req, res) {
		var newUser = new userModel();
		newUser.firstname = req.body.firstname;
		newUser.lastname = req.body.lastname;
		newUser.email = req.body.email;
		newUser.password = req.body.password;
		if(newUser.save()) {
			console.log('user created');
			res.send('user successfully created')
		} else {
			console.log('user not created');
			res.send('user not created');
		}
	},

	login: function(req, res){
		console.log(req.body);
		userModel.findOne({email: req.body.email, password: req.body.password}, function(err, user) {
			if(err) {
				console.log(err, 'error');
				res.json({status: false, message: 'An error occurred'});
			} else {
				if(user) {
					var token = jwt.sign({user}, 'SECRET', { expiresIn: '1h' });
					res.json({status: true, message: 'Login successful', token});
				} else {
					res.json({status: false, message: 'Invalid email/password'});
				}
			}
		})
	}

}

module.exports = UserController;