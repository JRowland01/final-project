import React, { Component } from 'react';

class Home extends Component{
	constructor(props) {
		super(props);
		this.state = {
			message: '',
			name: '',
			email:'',
			alertMsg:''
		}

		this.submitForm = this.submitForm.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
		[name]: value
		});
	}

	submitForm(e){
		this.setState({
		alertMsg:''
		})

		e.preventDefault()
		var _this = this;
		$.ajax({
	   		url: "https://formspree.io/info@jimmiarowland.com", 
	   		method: "POST",
	   		data: {
	   			message: _this.state.message,
	   			_replyto: _this.state.email,
	   			name: _this.state.name
	   		},
	   		dataType: "json",
	   		success: function(){
	   			_this.setState({
	   				message: '',
	   				email: '',
	   				name:'',
	   				alertMsg:'Your message has been sent.'
	   			});
	   		}
		});
	}

	alertMsg(){
		return <div className="alert alert-success">{this.state.alertMsg}</div>
	}

	render() {
		return (
	<div className="container-fluid">
		
		<img className="hero-img" src="assets/images/hero-image-praise.jpg" />

		<div id="brief" className="brief-intro">
			<div className="row">
				<div className="col-md-4">
					<h3 className="h3-heading">About Our Ministry</h3>
					<p>Destined to Conquer provides online Bible study activities to assist women with striving for their best life through Christ. Each lesson contains interactive questions that are in depth, introspective and intended to enrich your faith walk.</p>
					<p>Understanding that every woman's faith walk is different, we strive to provide content ranging in a variety of subjects to impact the lives of as many women as possible.</p>
					
				</div>

				<div className="col-md-4">
					<h3 className="h3-heading">Upcoming Lesson</h3>
					<img src="/assets/images/friendship-home.png"/>	
					<p>Our next lesson will be "The Gift of Friendship". </p>
				</div>

				<div className="col-md-4">
				    <h3 className="h3-heading">Future Site Updates</h3>
					<p>We currently have an independent study format. In the future, we are going to have a facilitator assisting with our site, by monitoring the activities of participants and providing valuable feedback for each completed lesson. You can be assured that all of your lesson responses will still remain confidential.</p>
					<p>Lesson forums will also be added to the site to develop more of a community setting.</p>
				</div>
			</div>
		</div>

		<div id="contact" className="contact">
			<div className="row">
				<div className="col-md-6">
				<h3 className="contact-heading">Bible Verse of the Day</h3>

				<div id="ourmanna-verse">Loading...</div>
						{/* <h2 className="contact-text">Do you have any questions or would like to provide feedback? Feel free to complete our contact form. We look forward to hearing from you and will<br/> respond within 24 hours.</h2>*/}
					</div>

				<div className="col-md-6">
				<h3 className="contact-heading">Contact Us</h3>
					{this.state.alertMsg ? this.alertMsg(): null}
					<form onSubmit={this.submitForm}>
					  <div className="form-group pmd-textfield">
					    <label htmlFor="name">Name</label>
					    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange}/>
					  </div>
					  <div className="form-group pmd-textfield">
					    <label htmlFor="email">Email</label>
					    <input type="text" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleInputChange}/>
					  </div>
					  <div className="form-group pmd-textfield">
					    <label htmlFor="message">Message</label>
					    <textarea rows="10" className="form-control" id="message" name="message" value={this.state.message} onChange={this.handleInputChange}/>
					  </div>
					  <button type="submit" className="btn btn-default">Submit</button>
					</form>
					 <br/>
				</div>

			</div>
		</div>
	</div>
		);
	}
}

export default Home;