import React, { Component } from 'react';
import Api from '../utils/API';
// import { browserHistory } from 'react-router';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: '',
		}

		this.login = this.login.bind(this);
	}
	//Login function for current users.
	//Values are retrieved for the login form.
	login(e) {
		e.preventDefault();
		console.log('got here')
		this.setState({message: 'Processing'});
		//Replaces document.getElementById
		const email = this.email.value;
		const password = this.password.value;
		Api.login({email, password}).then((response) => {
		//If login is successful, save in local storage and redirect user to the main lessons page
			if(response.data.status) {
				localStorage.setItem('bibleApp', response.data.token);
			   console.log(response.data.token, response.data.status)
				// this.props.setLoginStatus(true);
				// this.props.history.push('/lessons');
				window.location.href = './lessons'
			} else {
				this.setState({message: response.data.message, problem:true});
			}
		// })
		}).catch((e) => {
			this.setState({message: "An unknown error occurred", problem:true});
		});
	}

	errorMsg(){
		return <div className="alert alert-danger">{this.state.message}</div>
	}

	render() {
		return (
			<div className = "row">
			{/*Login function is invoked when user clicks the submit button*/}
				<form onSubmit={this.login}>
					<div className="row">
						<div className="col-md-4 col-md-offset-4">
						<div className="login-style">
							<h2>Login</h2>
							{this.state.problem ? this.errorMsg(): null}
							<div className="form-group pmd-textfield">
								<label htmlFor="loginemail">Email</label>
								<input type="email" id="loginemail" className="form-control" ref={(input)=> this.email = input}/>
							</div>
							<div className="form-group pmd-textfield">
								<label htmlFor="loginpassword">Password</label>
								<input className="form-control" type="password" id="loginpassword" ref={(input)=> this.password = input}/>
							</div>
							{/*<p>{this.state.message}</p>*/}
							<input className="btn btn-primary" type="submit" value="Login"/>
						</div>
						</div>
					</div>
				</form>
			
			</div>
		);
	}
}

export default Login;