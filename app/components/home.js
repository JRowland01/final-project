import React, { Component } from 'react';

class Home extends Component{
	render() {
		return (
	<div className="container">
		<img className="hero-img" src="assets/images/hero-image-2.jpg" />
		<div id="brief" className="brief-intro">
			<div className="row">
				<div className="col-md-4">
					<p>The brief intro about the app goes here The brief inThe brief intro about 
			the app goes here The brief inThe brief intro about the app goes here </p>
				</div>
				<div className="col-md-4">
					<p>The brief intro about the app goes here The brief inThe brief intro about 
			the app goes here The brief inThe brief intro about the app goes here </p>
				</div>
				<div className="col-md-4">
					<p>The brief intro about the app goes here The brief inThe brief intro about 
			the app goes here The brief inThe brief intro about the app goes here </p>
				</div>
			</div>
		</div>
		<hr />
		<div id="contact" className="contact">
			<div className="row">
				<div className="col-md-6">
					<p>Brief infomation here</p>
				</div>
				<div className="col-md-6">
					<p>Contact Form</p>
					<form>
					  <div className="form-group pmd-textfield">
					    <label htmlFor="name">Name</label>
					    <input type="email" className="form-control" id="name"  />
					  </div>
					  <div className="form-group pmd-textfield">
					    <label htmlFor="email">Email</label>
					    <input type="text" className="form-control" id="email" />
					  </div>
					  <div className="form-group pmd-textfield">
					    <label htmlFor="message">Message</label>
					    <textarea rows="10" className="form-control" id="message" />
					  </div>
					  <button type="submit" className="btn btn-default">Submit</button>
					</form>
				</div>
			</div>
		</div>
	</div>
		);
	}
}

export default Home;