import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import Api from '../utils/API';

class Lessons extends Component{
	constructor() {
		super();
		this.state = {
			lessons: []
		};
	}

	componentWillMount() {
		/*If user is not logged into account and attempts to view the lessons page, they will be 
		directed to the login page*/
		
		if(!localStorage.getItem('bibleApp')) {
			browserHistory.push('/login')
		} else {
			Api.getAllLessons().then((response) => {
				if(response.status) {
					this.setState({lessons: response.data.lessons})
				}
			}).catch(() => {
				alert('An error occurred');
			});
		}
	}

	render() {
		

		return (
		<div className="container">
			<h1>Lessons</h1>
			<div className="row container-a4">
				<ul className="img-hover-style">
				{
					this.state.lessons.map((eachLesson, index) => {
						return (
							<li key={index} className="col-md-3 lesson-holder">
								<Link to={"view-lesson/"+eachLesson._id}>
									<img src={"assets/images/"+eachLesson.image} alt=""/>
									<div className="caption">
										<div className="blur"></div>
										<div className="caption-text">
											<h1>{eachLesson.title}</h1>
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