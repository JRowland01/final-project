import React, { Component } from 'react';

class Home extends Component{
	
	componentDidMount(){

//Verse of the day from Dailyverses.net
	$.ajax({
	    url:'https://dailyverses.net/getdailyverse.ashx?language=niv&isdirect=1&url=' + window.location.hostname,
	    dataType: 'JSONP',
	    success:function(json){
	    $(".dailyVersesWrapper").prepend(json.html);     
	    }
    });
	}

	render() {
		return (
	<div className="container-fluid">
		<img className="hero-img" src="assets/images/hero-image.jpg" />

		<div id="brief" className="brief-intro">
			<div className="row">
				<div className="col-md-4">
					<h3 className="h3-heading">About Our Ministry</h3>
					<p>Destined to Conquer provides online Bible study activities to assist women with striving for their best life through Christ. Each lesson contains interactive questions that are in-depth, introspective and intended to enrich your faith walk.</p>
					<p>Understanding that every woman's faith walk is different, we strive to provide content ranging in a variety of subjects to impact the lives of as many women as possible.</p>
					
				</div>
				<div className="col-md-4">
					<h3 className="h3-heading">Upcoming Lesson</h3>
					<img src="/assets/images/friends-home.jpg"/>	
					<p>The next lesson will be "The Gift of Friendship".</p>
				</div>
				<div className="col-md-4">
				    <h3 className="h3-heading">Future Site Updates</h3>
					<p>We currently have an independent study format. In the future, we are going to have a facilitator assisting with our site, by monitoring the activities of participants and providing valuable feedback for each completed lesson. You can be assured that all of your lesson responses will still remain confidential.</p>
					<p>Lesson forums will also be added to the site to develop more of a community setting.</p>
				</div>
			</div>
		</div>
		<div id="contact" className="verse">
			<div className="row">
				<div className="col-md-6">
				<h3 className="verse-heading">Bible Verse of the Day</h3>
				<div className="dailyVersesWrapper">
				
				</div>

				</div>
				<div className="col-md-6">
				
					
				</div>
			</div>
		</div>
	</div>
		);
	}
}
export default Home;