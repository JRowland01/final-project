import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../utils/API';

class Lessons extends Component{
	constructor(props) {
		super();
		this.state = {
			lessons: []
		};
	}

	componentWillMount() {
		/*If user is not logged into account and attempts to view the lessons page, they will be 
		directed to the login page*/
		
		// if(!localStorage.getItem('bibleApp')) {
		// 	this.props.history.push('/login')
		// } else {
			Api.getAllLessons().then((response) => {
				if(response.status) {
					this.setState({lessons: response.data.lessons})
				}
			}).catch((err) => {
				// alert('An error occurred');
				
				if(err){console.log('an error occured')}
			});
		}
	// }

	render() {
		
	//Allows the lesson thumbnails to be displayed in the Lessons page and with a hover.
		return (
		<div className="container">
			<h1 className="main-lesson-title">Lessons</h1>
			<div className="row container-a4">
				<ul className="img-hover-style">
				{
				/*Map takes the lessons array elements and maps it to a new array containing React elements.*/
					this.state.lessons.map((lesson) => {
						return (
					/*Retrieves the images corresponding to the lesson id in the database*/
							<li key={lesson._id} className="col-md-4 lesson-holder">
								<Link to={"/view-lesson/"+lesson._id}>
									<img src={"/assets/images/"+lesson.image} alt=""/>
									<div className="caption">
										<div className="blur"></div>
										<div className="caption-text">
											<h1 className="lesson-heading">{lesson.title}</h1>
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