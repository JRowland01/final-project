var userModel = require('../models/User')
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
		userModel.findOne({email: req.body.email, password: req.body.password}, function(err, user) {
			if(err) {
				console.log(err);
				res.json({status: false, message: 'An error occurred'});
			} else {
				console.log(user);
				if(user) {
					res.json({status: true, message: 'Login succesfull'});
				} else {
					res.json({status: false, message: 'Invalid email/password'});
				}
			}
		})
	}

}

module.exports = UserController;