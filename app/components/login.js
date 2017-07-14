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
			console.log(response);
		//If login is successful, save in local storage and redirect user to the main lessons page
			if(response.data.status) {
				localStorage.setItem('bibleApp', response.data.token);
				this.props.setLoginStatus(true);
				browserHistory.push('/lessons');
			} else {
				this.setState({message: response.data.message, problem:true});
			}
		}).catch((e) => {
			console.log(e);
			this.setState({message: "An unknown error occurred", problem:true});
		});
	}

	errorMsg(){
		return <div className="alert alert-danger">{this.state.message}</div>
	}

	render() {
		return (
			<div className = "field">
			{/*Login function is invoked when user clicks the submit button*/}
				<form onSubmit={this.login}>
					<div className="row">
						<div className="col-xs-4 col-xs-offset-4">
							<h2>Login</h2>
							{this.state.problem ? this.errorMsg(): null}
							<div className="form-group pmd-textfield">
								<label htmlFor="loginemail">Email</label>
								<input type="email" id="loginemail" className="form-control"/>
							</div>
							<div className="form-group pmd-textfield">
								<label htmlFor="loginpassword">Password</label>
								<input className="form-control" type="password" id="loginpassword"/>
							</div>
							{/*<p>{this.state.message}</p>*/}
							<input className="btn btn-primary" type="submit" value="Login"/>
						</div>
					</div>
				</form>
				
			</div>
		);
	}
}

export default Login;