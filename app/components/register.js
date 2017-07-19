import React, { Component } from 'react';
import Api from '../utils/API';
import { browserHistory } from 'react-router';

class Register extends Component {
	constructor() {
		super();
		this.state = {problem:false};
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
				this.setState({problem:true, message:response.data.message});
			}
		});
	}

	render() {
		let errorMsg = <div className="alert alert-danger">{this.state.message}</div>
		return (
			<div className="row">
				<div className="col-xs-4 col-xs-offset-4">
				 <div className="register-style">
					<h2>Register</h2>
				{/*Register function is invoked when user clicks the submit button*/}
					<form onSubmit={(e)=>this.register(e)}>
						{this.state.problem ? errorMsg : null}
						<div className="form-group pmd-textfield">
							<label>First Name</label>
							<input type="text" ref={(input)=> this.firstname = input} className="form-control"/>
						</div>
						<div className="form-group pmd-textfield">
							<label>Last Name</label>
							<input type="text" ref={(input)=> this.lastname = input} className="form-control"/>
						</div>
						<div className="form-group pmd-textfield">
							<label>Email</label>
							<input type="email" ref={(input)=> this.email = input} className="form-control"/>
						</div>
						<div className="form-group pmd-textfield">
							<label>Password</label>
							<input type="password" ref={(input)=> this.password = input} className="form-control"/>
						</div>
						<input type="submit" value="Register" className="btn btn-primary"/>
					</form>
				</div>
				</div>
			</div>
		);
	}
}

export default Register;