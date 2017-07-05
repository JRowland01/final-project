import React, { Component } from 'react';

class Lessonpg extends Component{
	render() {
		return(
				<div className="container">
					<div className="lesson-content">
						Content of the lesson goes here
						Content of the lesson goes here
						Content of the lesson goes here
						Content of the lesson goes here
						Content of the lesson goes here
						Content of the lesson goes here
					</div>

					<hr/>
					<div className="questions">
						<form>
							<p>Question one</p>
							<div className="form-group pmd-textfield pmd-textfield-floating-label">
							    <label htmlFor="answer1">Your answer</label>
							    <textarea rows="10" className="form-control" id="answer1"></textarea>
							</div>
							
							<p>Question Two</p>
							<div className="form-group pmd-textfield pmd-textfield-floating-label">
							    <label htmlFor="answer2">Answer 2</label>
							    <textarea rows="10" className="form-control" id="answer2"></textarea>
							</div>
							
							<p>Question Three</p>
							<div className="form-group pmd-textfield pmd-textfield-floating-label">
							    <label htmlFor="answer3">Your answer</label>
							    <textarea rows="10" className="form-control" id="answer3"></textarea>
							</div>
							
							<p>Question Four</p>
							<div className="form-group pmd-textfield pmd-textfield-floating-label">
							    <label htmlFor="answer4">Answer 4</label>
							    <textarea rows="10" className="form-control" id="answer4"></textarea>
							</div>
							<button type="submit" className="btn btn-primary">Submit</button>
						</form>
					</div>

					<div className="feedback">
						<h4>Facilitator Feedback</h4>
						<form>
							<div className="form-group pmd-textfield pmd-textfield-floating-label">
							    <textarea rows="10" className="form-control" id="feedback"></textarea>
							</div>
							<button type="submit" className="btn btn-primary">Submit</button>
						</form>
					</div>
				</div>
			)

	}

}

export default Lessonpg;