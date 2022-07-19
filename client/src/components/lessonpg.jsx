import React, { Component } from 'react';
import Api from '../utils/API';
// import {useParams} from 'react-router-dom'
//An NPM used to display the Bible verses.
// import RefTagger  from 'react-reftagger';
import { Link } from 'react-router-dom';
// import {createBrowserHistory} from "history"

 class Lessonpg extends Component{
	constructor(props) {
		super(props);
		this.state = {
			problem:false,
			answered:false,
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

	// const lessonId = useParams()
	//Once the page loads, the lesson details are retrieved.
	componentDidMount() {
		//Get lesson details
		Api.getLessonDetails(this.props.match.params.lessonId).then((response) => {
			if(response.data.status) {
				this.setState({
					lesson: response.data.lesson,
					answered:false,
					problem:false,
					
				});
			}

		//Set state of lesson details
		}).then(()=>{
			return Api.hasSubmittedAnswers({lessonId:this.props.match.params.lessonId})

		//Determines if user has submitted the lesson answers.
		}).then((response)=>{
			if(response.data.status) {
				this.setState({
					answered: response.data.status,
					lesson: this.state.lesson,
					problem:false
				});
			}
		//log error to console in the event of failure.
		}).catch((e) => {
			console.log(e);
		});
	}

	//Retrieves the answers from the DOM, and makes API call to submit answers.
	answerLesson(e) {
		e.preventDefault();
		const answer1 = this.answer1.value;
		const answer2 = this.answer2.value;
		const answer3 = this.answer3.value;
		const answer4 = this.answer4.value;
		Api.submitAnswers({
			answer1,
			answer2,
			answer3,
			answer4,
			lessonId: this.props.match.params.lessonId
		}).then((response) => {
			if (response.data.status){
				this.props.history.push("/lessons");
			}else{
				this.setState({problem:true});
			}
			
		});
	}

	render() {
		// es6 destructuring
		//lesson property of this.state assigned to lesson and answered constants
		const { lesson, answered } = this.state;
		return(
				<div className="container">

					<h1 className="lesson-title">{lesson.title}</h1>
					<div className="lesson-content" dangerouslySetInnerHTML={{'__html': lesson.lesson_text}}></div>

					<hr/>
					{/*If the questions have been answered, a message will be displayed. 
					If they have not, the questions will be displayed*/}
					{answered ? this.renderMessage() : this.renderQuestions(lesson)}

					<Link to ="/lessons"><h4>Back to Lessons page</h4></Link>

					{/* <RefTagger />  */}

				</div>
			)

	}
	
	renderMessage(){
		return(
				<div className="container">
				<p><b>You have already completed this lesson.</b></p><br/>
				</div>	

			)
	}

	renderQuestions(lesson){
		return(
					<div className="questions">
						<h2 className="questions-heading">Questions</h2>
						<form onSubmit={this.answerLesson} id="answerForm">
							<p>{lesson.question_one}</p>
							<div className="form-group pmd-textfield pmd-textfield-floating-label">
							    <label htmlFor="answer1">Answer</label>
							    <textarea rows="10" className="form-control"  ref={(input)=> this.answer1 = input}></textarea>
							</div>
							
							<p>{lesson.question_two}</p>
							<div className="form-group pmd-textfield pmd-textfield-floating-label">
							    <label htmlFor="answer2">Answer</label>
							    <textarea rows="10" className="form-control" ref={(input)=> this.answer2 = input}></textarea>
							</div>
							
							<p>{lesson.question_three}</p>
							<div className="form-group pmd-textfield pmd-textfield-floating-label">
							    <label htmlFor="answer3">Answer</label>
							    <textarea rows="10" className="form-control" ref={(input)=> this.answer3 = input}></textarea>
							</div>
							
							<p>{lesson.question_four}</p>
							<div className="form-group pmd-textfield pmd-textfield-floating-label">
							    <label htmlFor="answer4">Answer</label>
							    <textarea rows="10" className="form-control" ref={(input)=> this.answer4 = input}></textarea>
							</div>
							<button type="submit" className="btn btn-primary">Submit</button>
						</form>
					</div>

		)
	}
}

export default Lessonpg;