import React, { Component } from 'react';
import Api from '../utils/API';
import { browserHistory } from 'react-router';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: '',
		}
		console.log(Api);
		this.login = this.login.bind(this);
	}
	//Login function for current users.
	//Values are retrieved for the login form.
	login(e) {
		e.preventDefault();
		this.setState({message: 'Processing'});
		const email = document.getElementById('loginemail').value;
		const password = document.getElementById('loginpassword').value;
		Api.login({email, password}).then((response) => {

		//If login is successful, save in local storage and redirect user to the main lessons page
			if(response.data.status) {
				localStorage.setItem('bibleApp', response.data.token);
				this.props.setLoginStatus(true);
				browserHistory.push('/lessons');
			}
		}).catch((e) => {
			console.log(e);
			this.setState({message: "An unknown error occurred"});
		});
	}

	render() {
		return (
			<div className = "field">
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
					<p>{this.state.message}</p>
					<input type="submit" value="Login"/>
				</form>
				
			</div>
		);
	}
}

export default Login;