import React, { Component } from 'react';
import Api from '../utils/API';
import RefTagger  from 'react-reftagger';

class Lessonpg extends Component{
	constructor(props) {
		super(props);
		this.state = {
			lesson: {
				title: '',
				lesson_text: '',
				question_one: '',
				question_two: '',
				question_three: '',
				question_four: ''
			}
		}
		this.answerLesson = this.answerLesson.bind(this);
	}
	//Once the loads, the lesson details are retrieved.
	componentWillMount() {
		Api.getLessonDetails(this.props.params.lessonId).then((response) => {
			if(response.data.status) {
				this.setState({lesson: response.data.lesson});
			}
		}).catch((e) => {
			console.log(e);
			//alert('An error occurred');
		});
	}

	//Retrieves the answers from the DOM, and makes API call to submit answers.
	answerLesson(e) {
		e.preventDefault();
		const answer1 = document.querySelector('#answer1').value;
		const answer2 = document.querySelector('#answer2').value;
		const answer3 = document.querySelector('#answer3').value;
		const answer4 = document.querySelector('#answer4').value;
		Api.submitAnswers({
			answer1,
			answer2,
			answer3,
			answer4,
			lessonId: this.props.params.lessonId
		}).then((response) => {
			document.querySelector('#answerForm').reset();
			alert(response.data.message);
		}).catch(e => {
			console.log(e)
			alert('An error occurred ');
		});
	}

	render() {
		// es6 destructuring
		//lesson property of this.state assigned to lesson variable
		const { lesson } = this.state;
		return(
				<div className="container">

					<h1 className="lesson-title">{lesson.title}</h1>
					<div className="lesson-content" dangerouslySetInnerHTML={{'__html': lesson.lesson_text}}></div>

					<hr/>
					<h2 className="questions-heading">Questions</h2>
					<div className="questions">
						<form onSubmit={this.answerLesson} id="answerForm">
							<p>{lesson.question_one}</p>
							<div className="form-group pmd-textfield pmd-textfield-floating-label">
							    <label htmlFor="answer1">Answer</label>
							    <textarea rows="10" className="form-control" id="answer1"></textarea>
							</div>
							
							<p>{lesson.question_two}</p>
							<div className="form-group pmd-textfield pmd-textfield-floating-label">
							    <label htmlFor="answer2">Answer</label>
							    <textarea rows="10" className="form-control" id="answer2"></textarea>
							</div>
							
							<p>{lesson.question_three}</p>
							<div className="form-group pmd-textfield pmd-textfield-floating-label">
							    <label htmlFor="answer3">Answer</label>
							    <textarea rows="10" className="form-control" id="answer3"></textarea>
							</div>
							
							<p>{lesson.question_four}</p>
							<div className="form-group pmd-textfield pmd-textfield-floating-label">
							    <label htmlFor="answer4">Answer</label>
							    <textarea rows="10" className="form-control" id="answer4"></textarea>
							</div>
							<button type="submit" className="btn btn-primary">Submit</button>
						</form>
					</div>
					<a href="/lessons"><h4>Back to Lessons page</h4></a>
					<RefTagger />
				</div>
			)

	}

}

export default Lessonpg;