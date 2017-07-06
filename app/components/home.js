import React, { Component } from 'react';

class Home extends Component{
	render() {
		return (
	<div className="container">
		
		<img className="hero-img" src="assets/images/hero-image.jpg" />

		<div id="brief" className="brief-intro">
			<div className="row">
				<div className="col-md-4">
					<h3>About Our Ministry</h3>
					<p>Destined to Conquer provides online Bible study activities to assist women with striving for their best life through Christ. Each lesson contains interactive questions that are in depth, introspective and intended to enrich your faith walk.</p>
					<p>Understanding that every woman's faith walk is different, we strive to provide content ranging in a variety of subjects to impact the lives of as many women as possible.</p>
					
				</div>

				<div className="col-md-4">
					<h3>Upcoming Lesson</h3>
					<img src="/assets/images/friendship-home.png"/>	
					<p>Our next lesson will be "The Gift of Friendship". </p>
				</div>

				<div className="col-md-4">
				    <h3>Future Site Updates</h3>
					<p>We currently have an independent study format. In the future, we are going to have a faciliator assisting with our site, by monitoring the activities of participants and providing valuable feedback for each lesson you complete. You can be assured that all of your lesson responses will still remain confidential.</p>
					<p>Lesson forums will also be added to the site to develop more of a community setting.</p>
				</div>
			</div>
		</div>


		<div id="contact" className="contact">
			<div className="row">
				<div className="col-md-6">
				<h3>Contact Us</h3>
					<h2>Do you have any questions or would like to provide feedback? Feel free to complete our contact form. We look forward to hearing from you and will<br/> respond within 24 hours.</h2>
				</div>

				<div className="col-md-6">
				<br/>
					<form>
					  <div className="form-group pmd-textfield">
					    <label htmlFor="name">Name</label>
					    <input type="text" className="form-control" id="name"  />
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
					 <br/>
				</div>

			</div>
		</div>
	</div>
		);
	}
}

export default Home;