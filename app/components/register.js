import React, { Component } from 'react';
import Api from '../utils/API';
import { browserHistory } from 'react-router';

class Register extends Component {
	constructor() {
		super();
		this.state = {problem:false};
		console.log(Api);
	}
	//Register function for new users.
	//Values are retrieved for the contact form.
	register(e) {
		e.preventDefault();
		const firstname = this.firstname.value;
		const lastname = this.lastname.value;
		const email = this.email.value;
		const password = this.password.value;
		Api.register({firstname, lastname, email, password}).then((response) => {
			if (response.data.status){  
			  browserHistory.push("/login");
			}else{
				this.setState({problem:true});
			}
		});
	}

	render() {
		let errorMsg = <div>A registration error occured.</div>
		return (
			<div>
				<h2>Register</h2>
			{/*Register function is invoked when user clicks the submit button*/}
				<form onSubmit={(e)=>this.register(e)}>
					{this.state.problem ? errorMsg : null}
					<div>
						<label>First Name</label>
						<input type="text" ref={(input)=> this.firstname = input}/>
					</div>
					<div>
						<label>Last Name</label>
						<input type="text" ref={(input)=> this.lastname = input}/>
					</div>
					<div>
						<label>Email</label>
						<input type="email" ref={(input)=> this.email = input}/>
					</div>
					<div>
						<label>Password</label>
						<input type="password" ref={(input)=> this.password = input}/>
					</div>
					<input type="submit" value="Register"/>
				</form>
				
			</div>
		);
	}
}

export default Register;