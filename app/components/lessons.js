import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class Lessons extends Component{
	componentWillMount() {
		/*If user is not logged into account and attempts to view the lessons page, they will be 
		directed to the login page*/
		
		if(!localStorage.getItem('bibleApp')) {
			browserHistory.push('/login')
		}
	}

	render() {
		const lessons = [{
			name: 'Lesson 1',
			image: 'triathlon.png'
		}, {
			name: 'Lesson 2',
			image: 'kickfear.png'
		}, {
			name: 'Lesson 3',
			image: 'story.png'
		}, {
			name: 'Lesson 4',
			image: 'healthy.png'
		}]
		return (
		<div className="container">
			<h1>Lessons</h1>
			<div className="row container-a4">
				<ul className="caption-style-4">
				{
					lessons.map((eachLesson, index) => {
						return (
							<li key={index} className="col-md-3 lesson-holder">
								<Link to={"view-lesson/"+index}>
									<img src={"assets/images/"+eachLesson.image} alt=""/>
									<div className="caption">
										<div className="blur"></div>
										<div className="caption-text">
											<h1>{eachLesson.name}</h1>
										</div>
									</div>
								</Link>
							</li>
						)
					})
				}
				</ul>
			</div>
		</div>

		
		);
	}
}

export default Lessons;