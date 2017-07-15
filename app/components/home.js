import React, { Component } from 'react';

class Home extends Component{

	render() {
		return (
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-12 hero-image">

			</div>
		</div>
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
					<h3 className="h3-heading">Bible Verse of the Day</h3>
				    

				<div id="ourmanna-verse">Loading...</div>
				</div>
			</div>
		</div>

	</div>
		);
	}
}

export default Home;