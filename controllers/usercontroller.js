//Dependencies
var userModel = require('../models/User');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

const UserController = {
	//The register function allows the new user to be created in the system.
	register: function(req, res) {
		if (!req.body.firstname 
			|| !req.body.lastname 
			|| !req.body.email 
			|| !req.body.password){

			res.json({status: false, message: 'User not created.'});
				return;
		}

		var newUser = new userModel();
		newUser.firstname = req.body.firstname;
		newUser.lastname = req.body.lastname;
		newUser.email = req.body.email;
		//Will create a new thread in the background and hash password.
		//10 - number of salt rounds
		bcrypt.hash(req.body.password, 10).then(function(hash){
			newUser.password = hash;
			//Once the task is resolved, the user's password becomes the hash.
			//Promise returned, allowing us to catch errors or saving passwords in the database.
			return newUser.save().then(()=>{ //New user is saved in the database.
				res.json({status: true, message: 'User successfully created'});
			})
		}).catch(()=>{
			res.json({status: false, message: 'User not created'});
		});
	},

	//The login function allows the user to be logged in. If their login information is valid, a JSON token is retrieved that expires in 1hr
	login: function(req, res){
		console.log(req.body.email);
		//Finding an entry in database containing the correct email address.
		userModel.findOne({email: req.body.email}).then(function(user){
			console.log(user);
			//bcrypt is used to compare the password given to the password hash saved
			let passwordHash = user.password;
			let loginPassword = req.body.password;
			//Returning promise, allowing us to have a promise chain containing catch.
			return bcrypt.compare(loginPassword, passwordHash).then(function(passwordCorrect){

			//A boolean value is passed, determining if the password and the hash matches.
				if (passwordCorrect){
					var token = jwt.sign({user}, 'SECRET', { expiresIn: '1h' });
					res.json({status: true, message: 'Login successful', token: token});
				} else {
					res.json({status: false, message: 'Invalid email/password'});
				}
				
			});
		
		}).catch(function(e){
			//Will catch any errors found.
			console.log(e);
			res.json({status: false, message: 'An error occurred'});
		});
	}

}

module.exports = UserController;