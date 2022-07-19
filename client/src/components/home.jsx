import React, { Component } from 'react';
import $ from "jquery"
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
		<img className="hero-img" src="assets/images/hero-image.jpg" alt="hero-img" />

		<div id="brief" className="brief-intro">
			<div className="row">
				<div className="col-md-4">
					<h3 className="h3-heading">About Our Ministry</h3>
					<p>Destined to Conquer provides online Bible study activities to assist women with striving for their best life through Christ. Each lesson contains interactive questions that are in-depth, introspective and intended to enrich your faith walk. Understanding that every woman's journey is different, we offer content ranging in a variety of subjects.</p>
					
				</div>
				<div className="col-md-4">
					<h3 className="h3-heading">Upcoming Lesson</h3>
					<p>The next lesson will be "The Gift of Friendship". Friendship is the springboard to every other love and the foundation for every healthy relationship. It is a proven fact that healthy friendships promote longevity. Even Jesus needed friends when He walked this earth as a man. In fact, He placed great value on relationships. </p>
				</div>
				<div className="col-md-4">
				    <h3 className="h3-heading">Future Site Updates</h3>
					<p>We currently have an independent study format. In the future, we are going to have a facilitator assisting with our site, by monitoring the activities of participants and providing valuable feedback for each completed lesson. You can be assured that all of your lesson responses will still remain confidential.</p>
				</div>
			</div>
		</div>
	</div>
		);
	}
}
export default Home;