import React, { Component } from 'react';
import Api from '../utils/API';

class Register extends Component {
	constructor() {
		super();
		//this.state = {}
		console.log(Api);
	}
	//Register function for new users.
	//Values are retrieved for the contact form.
	register(e) {
		e.preventDefault();
		const firstname = document.getElementById('firstname').value;
		const lastname = document.getElementById('lastname').value;
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;
		Api.register({firstname, lastname, email, password});
	}

	render() {
		return (
			<div>
				<h2>Register</h2>
			{/*Register function is invoked when user clicks the submit button*/}
				<form onSubmit={this.register}>
					<div>
						<label>First Name</label>
						<input type="text" id="firstname"/>
					</div>
					<div>
						<label>Last Name</label>
						<input type="text" id="lastname"/>
					</div>
					<div>
						<label>Email</label>
						<input type="email" id="email"/>
					</div>
					<div>
						<label>Password</label>
						<input type="password" id="password"/>
					</div>
					<input type="submit" value="Register"/>
				</form>
				
			</div>
		);
	}
}

export default Register;