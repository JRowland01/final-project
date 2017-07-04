import React, { Component } from 'react';
import Api from '../utils/API';

class Login extends Component {
	constructor() {
		super();
		//this.state = {}
		console.log(Api);
	}
	//Login function for current users.
	//Values are retrieved for the login form.
	login(e) {
		e.preventDefault();
		const email = document.getElementById('loginemail').value;
		const password = document.getElementById('loginpassword').value;
		Api.login({email, password}).then((response) => {
			alert(response.data.message);
		}).catch((e) => {
			console.log(e);
			alert('There was an error on the backend');
		});
	}

	render() {
		return (
			<div>
				<h2>Login</h2>
			{/*Login function is invoked when user clicks the submit button*/}
				<form onSubmit={this.login}>
					<div>
						<label>Email</label>
						<input type="email" id="loginemail"/>
					</div>
					<div>
						<label>Password</label>
						<input type="password" id="loginpassword"/>
					</div>
					<input type="submit" value="Login"/>
				</form>
				
			</div>
		);
	}
}

export default Login;